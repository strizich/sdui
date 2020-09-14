<template>
<div>
  <div class="sd--slider" ref="slider">
    <div class="sd--slider__container">
      <div class="sd--slider__track-container">
        <!-- attach theme class to the bg of the track -->
        <div class="sd--slider__track" :style="`right: ${position.maxX - position.x + position.width}px;`"></div>
      </div>
        <div class="sd--slider__thumb-container" ref="handle" :style="thumbStyle">
          <!--
           - figure out how to set the original value of the slider
           - to get an output value
           - figure out how to calulate the slider steps
           - set position of the slider when clicking on the track
           -->
          <svg class="sd--slider__thumb" width="24" height="24">
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
          <sd-tooltip class="sd--tooltip--slider"
            ref="ttip"
            attach-to-parent
            :theme="theme"
            :active="position.isDragging"
            :autoOpen="false"
            :show-arrow="false"
            :offset="[-12, 8]"
          >
            <div class="sd--center sd--big">
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
    theme: String,
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
@import '../SdElevation/mixins';

.sd--slider{
  position:relative;
  margin-top: 32px;
  margin-bottom: 32px;
  height: 24px;
  max-width: 400px;
  margin: 32px auto;
  border-radius: 30px;
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
    border-radius: 30px;
  }
  &__thumb-container{
    width: 24px;
    height:24px;
  }
  &__thumb{
    fill: #fff;
    margin-left: -12px;
    margin-right: -12px;
  }
}
.sd--center{
  text-align:center;
  font-size: 16px;
}
</style>
