<template>
  <div class="sd--slider" ref="slider">
    <div class="sd--slider__container">
      <div class="sd--slider__track-container">
        <div
          class="sd--slider__track"
          :style="thumbTrackStyle"
        />
      </div>
      <div
        ref="handle"
        class="sd--slider__thumb-container"
        :style="thumbStyle"
      >
        <svg class="sd--slider__thumb" width="24" height="24">
          <circle cx="12" cy="12" r="12"></circle>
        </svg>
        <sd-tooltip
          ref="ttip"
          attach-to-parent
          :active="state.isDragging"
          :autoOpen="false"
          :show-arrow="false"
          :offset="[0, 8]"
        >
          <div class="sd--center sd--big">
            {{result}}
          </div>
        </sd-tooltip>
        initX{{state.initX}}
        X: {{state.x}}
      </div>
    </div>
  </div>
  <pre>
    {{state}}
  </pre>
</template>

<script>
import { defineComponent, ref, reactive, computed, watchEffect, onMounted } from 'vue'
import { SdTooltip } from '@/library'

export default defineComponent({
  name: 'SdSlider',
  components: {
    SdTooltip
  },
  props: {
    value: Number,
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    theme: String
  },
  emits: ['update:value'],
  setup (props, { emit }) {
    const slider = ref(null)
    const handle = ref(null)
    const state = reactive({
      init: false,
      x: 0,
      minX: 0,
      maxX: 0,
      dragStartX: null,
      isDragging: false,
      handleWidth: 0,
      handleHeight: 0,
      rootWidth: 0,
      rootHeight: 0,
      initX: 0,
      step: props.step,
      min: props.min,
      max: props.max,
      newValue: null,
      pctComplete: 0
    })

    const containerStyle = computed(() => {
      return {
        width: state.handleWidth + 'px',
        height: state.handleHeight + 'px'
      }
    })

    const thumbTrackStyle = computed(() => {
      return {
        width: state.initX + (state.handleWidth / 2) + 'px'
      }
    })

    const thumbStyle = computed(() => {
      return {
        transition: 'transform .23s ease-in-out',
        position: 'absolute',
        left: state.initX - (state.handleWidth / 2) + 'px',
        // transform: state.isDragging ? 'scale(1.1)' : '',
        cursor: state.isDragging ? 'grab' : 'pointer'
      }
    })

    const result = computed(() => {
      const currentValue = props.min + state.pctComplete * (props.max - props.min)
      const quantize = Math.round(currentValue / props.step) * props.step
      if (currentValue !== props.max && currentValue !== props.min) {
        emit('update:value', quantize)
        return Math.round(currentValue / props.step) * props.step
      }
      if (currentValue) {
        return props.value
      }
      emit('update:value', currentValue)
      return currentValue
    })

    const onMouseDown = e => {
      const { clientX } = e
      state.dragStartX = clientX - state.x
      state.isDragging = true
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
    }

    const onMouseMove = e => {
      const { clientX } = e
      state.x = Math.max(1, Math.min(clientX - state.dragStartX, state.maxX))
    }

    const onRailClick = e => {
      const { clientX } = e
      const rect = slider.value.getBoundingClientRect()
      const offset = rect.left
      const clickX = Math.round((clientX - offset))
      state.x = Math.max(1, Math.min(clickX, state.maxX))
      state.isDragging = true
      state.dragStartX = clientX - state.x
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
    }

    const onMouseUp = e => {
      // const { clientX, clientY } = e
      state.dragStartX = null
      state.isDragging = false
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onRailClick)
    }

    watchEffect(() => {
      if (
        slider.value instanceof HTMLElement &&
        handle.value instanceof HTMLElement
      ) {
        const rect = slider.value.getBoundingClientRect()
        state.offset = rect.left
        state.init = true
        state.handleWidth = Math.round(handle.value.clientWidth)
        state.handleHeight = Math.round(handle.value.clientHeight)
        state.rootWidth = Math.round(slider.value.clientWidth)
        state.rootHeight = Math.round(slider.value.clientHeight)
        state.maxX = Math.round(state.rootWidth)
        state.minX = 0
        state.pctComplete = state.x / state.rootWidth
        state.initX = Math.round(props.value / props.max * state.rootWidth)
        handle.value.addEventListener('mousedown', onMouseDown)
        slider.value.addEventListener('mousedown', onRailClick)
      }
    })

    // watch initValue?
    onMounted(() => {
      window.addEventListener('resize', () => {
        if (
          slider.value instanceof HTMLElement &&
          handle.value instanceof HTMLElement
        ) {
          // update bounderies on resize
          state.handleWidth = Math.round(handle.value.clientWidth)
          state.handleHeight = Math.round(handle.value.clientHeight)
          state.rootWidth = Math.round(slider.value.clientWidth)
          state.rootHeight = Math.round(slider.value.clientHeight)
        }
        // recalulate width on resize
        state.x = state.pctComplete * state.rootWidth
      })
    })

    return {
      slider,
      handle,
      thumbStyle,
      state,
      containerStyle,
      thumbTrackStyle,
      result,
      onRailClick
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../SdElevation/mixins';

.sd--slider{
  position:relative;
  margin-top: 32px;
  margin-bottom: 32px;
  height: 24px;
  margin: 32px auto;
  border-radius: 30px;
  width: 100%;
  &__track-container{
    background-color: var(--background-accent);
    position: absolute;
    height: 8px;
    left:0;
    right:0;
    top: 50%;
    margin-top: -4px;
    border-radius: 30px;
  }
  &__track{
    background-color: var(--primary);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    border-radius: 30px;
  }
  &__thumb-container{
    width: 24px;
    height:24px;
  }
  &__thumb{
    fill: var(--primary);
  }
}
.sd--center{
  text-align:center;
  font-size: 16px;
}
</style>
