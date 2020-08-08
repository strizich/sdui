<template>
  <transition name="sd-overlay">
    <div :class="['sd--overlay', overlayClasses]" v-if="active"></div>
  </transition>
</template>

<script>
// import SdPortal from '@/layout/SdPortal'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    parent: String,
    active: Boolean,
    attachToParent: Boolean,
    fixed: Boolean,
    blur: Boolean
  },
  setup (props) {
    const overlayClasses = computed(() => {
      return {
        'is--fixed': props.fixed,
        'is--blur': props.blur
      }
    })
    return {
      overlayClasses
    }
  }
})
</script>

<style lang="scss" scoped>
  .sd--overlay{
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 1001;
    background-color: rgba(0,0,0,.5);
    transition: .15s opacity ease-in-out;
    transition-property: opacity;
    will-change: opacity;
    body > &,
    &.is--fixed{
      position: fixed
    }
    &.is--blur{
      backdrop-filter: blur(16px);
    }
  }
  .sd-overlay-enter,
  .sd-overlay-leave-active {
    opacity: 0;
  }
</style>
