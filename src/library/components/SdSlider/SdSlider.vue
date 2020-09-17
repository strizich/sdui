<template>
  <div class="sd--slider" >
    <sd-label v-if="label">{{label}}</sd-label>
    <slot name="label"/>
    <div class="sd--slider__container">
      <div class="sd--slider__min" v-if="showIndicators">
        {{min}}
      </div>
      <div class="sd--slider__content" ref="slider">
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
            <circle cx="12" cy="12" r="12"/>
          </svg>
          <sd-tooltip
            ref="ttip"
            attach-to-parent
            :active="state.isDragging"
            :autoOpen="false"
            :show-arrow="false"
            :offset="[0, 8]"
            v-if="showTooltip"
          >
            <div class="sd--center sd--big">
              {{result}}
            </div>
          </sd-tooltip>
          <transition name="dragging">
            <div class="sd--slider__pulse" v-if="state.isDragging"></div>
          </transition>
        </div>
      </div>
      <div class="sd--slider__max" v-if="showIndicators">
        {{max}}
      </div>
    </div>
    <small v-if="hint" class="sd--text__footnote">{{hint}}</small>
    <slot name="hint"/>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, watchEffect, onMounted, onUnmounted, watch } from 'vue'
import { SdLabel, SdTooltip } from '@/library'

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
    showIndicators: Boolean,
    showTooltip: Boolean,
    theme: String,
    hint: String
  },
  emits: ['update:value'],
  setup (props, { emit }) {
    const slider = ref(null)
    const handle = ref(null)
    const observeWindow = ref(null)
    const state = reactive({
      init: false,
      initX: 0,
      x: 0,
      minX: 0,
      maxX: 0,
      dragStartX: null,
      isDragging: false,
      handleWidth: 0,
      handleHeight: 0,
      rootWidth: 0,
      rootHeight: 0,
      offset: null,
      step: props.step,
      min: props.min,
      max: props.max,
      pctComplete: 0
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
        cursor: state.isDragging ? 'grab' : 'pointer',
        zIndex: state.isDragging ? 1000 : 0
      }
    })

    const thumbClass = computed(() => {
      return {
        'is--dragging': state.isDragging
      }
    })

    const minMax = (min, value, max) => {
      return Math.max(min, Math.min(value, max))
    }

    const result = computed(() => {
      const currentValue = Math.round(props.min + state.pctComplete * (props.max - props.min))
      const quantize = Math.round(currentValue / props.step) * props.step
      if (currentValue !== props.max && currentValue !== props.min) {
        return minMax(props.min, quantize, props.max)
      }
      return minMax(props.min, currentValue, props.max)
    })

    const handleMove = (e) => {
      const { clientX } = e
      state.x = Math.max(0, Math.min(clientX - state.dragStartX, state.maxX))
      console.log(e)
    }

    const handleStart = (e) => {
      const { clientX } = e
      const clickX = Math.round((clientX - state.offset))
      state.x = Math.max(0, Math.min(clickX, state.maxX))
      state.isDragging = true
      state.dragStartX = clientX - state.x
    }

    const handleEnd = (e) => {
      state.isDragging = false
      state.dragStartX = null
    }

    const onMouseMove = e => {
      e.preventDefault()
      handleMove(e)
    }

    const onTouchMove = e => {
      e.preventDefault()
      handleMove(e.touches[0])
    }

    const onMouseDown = e => {
      handleStart(e)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove, { passive: false })
    }

    const onTouchStart = e => {
      console.log(e)
      handleStart(e.touches[0])
      document.addEventListener('touchend', onTouchEnd)
      document.addEventListener('touchmove', onTouchMove, { passive: false })
    }

    const onMouseUp = e => {
      handleEnd(e)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
    }

    const onTouchEnd = e => {
      handleEnd(e.touches[0])
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
        state.maxX = Math.round(state.rootWidth)
        state.pctComplete = minMax(0, state.x / state.rootWidth, 1)
        state.initX = minMax(0, Math.round((props.value - props.min) / (props.max - props.min) * state.rootWidth), state.rootWidth)
        slider.value.addEventListener('touchstart', onTouchStart)
        slider.value.addEventListener('mousedown', onMouseDown)
        window.addEventListener('resize', () => setElementBounds())
      }
    })

    watch(() => result.value, (newValue) => {
      emit('update:value', newValue)
    })

    const setElementBounds = () => {
      if (
        slider.value instanceof HTMLElement &&
        handle.value instanceof HTMLElement
      ) {
        const rect = slider.value.getBoundingClientRect()
        state.offset = rect.left
        state.handleWidth = Math.round(handle.value.clientWidth)
        state.handleHeight = Math.round(handle.value.clientHeight)
        state.rootWidth = Math.round(slider.value.clientWidth)
        state.rootHeight = Math.round(slider.value.clientHeight)
      }
    }

    onMounted(() => {
      setElementBounds()
      observeWindow.value = new ResizeObserver(setElementBounds).observe(slider.value)
    })

    onUnmounted(() => {
      observeWindow.value = null
    })

    return {
      slider,
      handle,
      thumbStyle,
      thumbClass,
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
  &__container{
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
  }
  &__min, &__max{
    margin: 0 8px;
    padding: 8px 16px;
    font-size: 11px;
    background-color: var(--background-accent)
  }
  &__min {
    margin-left: 0;
  }
  &__max {
    margin-right:0;
  }
  &__content{
    position:relative;
    height: 24px;
    border-radius: 30px;
    width:100%;
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
    &.is--dragging{
      &:after{
        content: '';
        background-color: green;
        left: 50%;
        opacity: .5;
        transform: transition(-0.5, 0.5);
      }
    }
  }
  &__thumb{
    fill: var(--primary);
  }
  &__pulse{
    transition: all .13s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary-accent);
    border-radius: 30px;
    z-index: 1;
    opacity: .25;
    transform: scale(2);
  }
}
.sd--center{
  text-align:center;
  font-size: 16px;
}

.dragging-enter-from, .dragging-leave-to{
  opacity: 0;
  transform: scale(0);
}
.dragging-enter-to{
  opacity: .25;
  transform: scale(2);
}
</style>
