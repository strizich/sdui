<template>
<div>
  <div class="sd--slider" ref="slider">
    <div class="sd--slider__container">
      <div class="sd--slider__track-container">
        <div class="sd--slider__track" :style="`right: ${position.maxX - position.x + position.width/2}px;`"></div>
      </div>
        <div class="sd--slider__thumb-container" ref="handle" :style="thumbStyle">
          <svg class="sd--slider__thumb" width="24" height="24"  >
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
          <sd-tooltip attach-to-parent :active="position.isDragging" :autoOpen="false">
            <div class="sd--center">
              {{position.x}}
            </div>
          </sd-tooltip>
        </div>
    </div>
  </div>
</div>

<pre>
<code>
{{position}}
</code>
</pre>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { SdTooltip } from '@/library'
import useDraggable from './useDraggable'
export default defineComponent({
  components: {
    SdTooltip
  },
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 1
    },
    modelValue: Number
  },
  emits: ['update:modelValue'],
  setup (props) {
    const slider = ref(null)
    const handle = ref(null)
    const { position, thumbStyle, containerStyle } = useDraggable(slider, handle)
    const state = reactive({
      tip: false
    })
    const mouseDown = () => {
      state.tip = true
    }
    const mouseUp = () => {
      state.tip = false
    }
    return { position, slider, handle, thumbStyle, containerStyle, state, mouseUp, mouseDown }
  }
})
</script>

<style lang="scss" scoped>
.sd--slider{
  position:relative;
  margin-top: 32px;
  margin-bottom: 32px;
  height: 24px;
  max-width: 400px;
  margin: 32px auto;
  &__track-container{
    background-color: var(--background-accent);
    position: absolute;
    height: 8px;
    left:0;
    right:0;
    top: 50%;
    margin-top: -4px;
  }
  &__track{
    background-color: var(--primary);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  &__thumb-container{
    width: 24px;
    height:24px;
  }
  &__thumb{
    fill: #fff;
  }
}
.sd--center{
  text-align:center;
}
</style>
