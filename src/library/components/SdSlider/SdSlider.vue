<template>
  <div class="sd--slider" >
    <sd-label v-if="label">{{label}}</sd-label>
    <div class="sd--slider__container" ref="slider">
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
      </div>
    </div>
     <p class="sd--text--hint">Yeet?</p>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, watchEffect, onMounted, onUnmounted } from 'vue'
import { SdTooltip, SdLabel } from '@/library'

export default defineComponent({
  name: 'SdSlider',
  components: {
    SdTooltip,
    SdLabel
  },
  props: {
    label: String,
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
      offset: null,
      step: props.step,
      min: props.min,
      max: props.max,
      newValue: null,
      pctComplete: 0
    })

    const thumbTrackStyle = computed(() => {
      return {
        width: state.initX + (state.handleWidth / 2) + 'px'
        // FUTURE: add representation of step indicators
      }
    })

    const thumbStyle = computed(() => {
      return {
        transition: 'transform .23s ease-in-out',
        position: 'absolute',
        left: state.initX - (state.handleWidth / 2) + 'px',
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
      emit('update:value', currentValue)
      return currentValue
    })

    const onMouseMove = e => {
      const { clientX } = e
      state.x = Math.max(1, Math.min(clientX - state.dragStartX, state.maxX))
    }

    const onMouseDown = e => {
      const { clientX } = e
      const clickX = Math.round((clientX - state.offset))
      state.x = Math.max(1, Math.min(clickX, state.maxX))
      state.isDragging = true
      state.dragStartX = clientX - state.x
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
    }
    const onTouchStart = e => {
      const { clientX } = e.touches[0]
      const clickX = Math.round((clientX - state.offset))
      state.dragStartX = clientX - state.x
      state.isDragging = true
      state.x = Math.max(1, Math.min(clickX, state.maxX))

      document.addEventListener('touchend', onTouchEnd)
      document.addEventListener('touchmove', onTouchMove, { passive: false })
    }

    const onMouseUp = e => {
      // const { clientX, clientY } = e
      state.dragStartX = null
      state.isDragging = false
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
    }

    const onTouchMove = e => {
      e.preventDefault()
      const { clientX } = e.touches[0]
      const clickX = Math.round((clientX - state.offset))
      state.x = Math.max(1, Math.min(clickX, state.maxX))
    }

    const onTouchEnd = e => {
      state.dragStartX = null
      state.isDragging = false
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchmove', onTouchMove)
    }

    watchEffect(() => {
      if (
        slider.value instanceof HTMLElement &&
        handle.value instanceof HTMLElement
      ) {
        const rect = slider.value.getBoundingClientRect()
        state.offset = rect.left
        state.init = true
        state.minX = props.min
        state.maxX = Math.round(state.rootWidth)
        state.pctComplete = state.x / state.rootWidth
        state.initX = Math.round(props.value / props.max * state.rootWidth)
        slider.value.addEventListener('touchstart', onTouchStart)
        slider.value.addEventListener('mousedown', onMouseDown)
      }
    })

    // saves the dimensions of the slider and handle
    const setElementDimensions = () => {
      if (
        slider.value instanceof HTMLElement &&
        handle.value instanceof HTMLElement
      ) {
        state.handleWidth = Math.round(handle.value.clientWidth)
        state.handleHeight = Math.round(handle.value.clientHeight)
        state.rootWidth = Math.round(slider.value.clientWidth)
        state.rootHeight = Math.round(slider.value.clientHeight)
      }
    }

    onMounted(() => {
      setElementDimensions()
      // We need to update the dimensions of our elements if the user resizes the window.
      window.addEventListener('resize', () => setElementDimensions())
    })

    onUnmounted(() => {
      window.removeEventListener('resize', () => setElementDimensions())
    })

    return {
      slider,
      handle,
      thumbStyle,
      state,
      thumbTrackStyle,
      result
    }
  }
})
</script>

<style lang="scss">
@import '../SdElevation/mixins';

.sd--slider{
  padding: 0 16px;
  &__container{
    position:relative;
    height: 24px;
    border-radius: 30px;
    width: 100%;
  }
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
