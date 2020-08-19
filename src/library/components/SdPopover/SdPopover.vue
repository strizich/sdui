<template>
   <teleport to="#app">
     <div ref="popover" class="sd--popover" v-if="shouldRender">
       <slot />
     </div>
   </teleport>
</template>

<script>
import Popper from 'popper.js'
import deepmerge from 'deepmerge'
import { reactive, ref, toRefs, computed, watchEffect, nextTick, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'SdPopover',
  props: {
    active: Boolean,
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, { emit, slots }) {
    const popover = ref(null)

    const state = reactive({
      shouldRender: false,
      shouldActivate: false,
      popperInstance: null
    })

    const popoverClasses = computed(() => {
      return {
        'is--active': state.showActivate,
        'is--rendering': state.shouldRender
      }
    })

    const getPopperOptions = () => {
      return {
        placement: 'bottom',
        modifiers: {
          preventOverflow: {
            boundriesElement: 'viewport',
            padding: 8
          },
          computeStyle: {
            enabled: true,
            gpuAcceleration: false
          }
        },
        onCreate: () => {
          state.shouldActivate = true
          emit('active')
        }
      }
    }

    const createPopper = () => {
      if (props.settings) {
        const options = deepmerge(getPopperOptions(), props.settings)
        state.popperInstance = new Popper(state.orignalParent, popover.value, options)
      }
    }

    const bindPopper = () => {
      nextTick().then(() => {
        if (state.orignalParent) {
          createPopper()
        }
      })
    }

    const killPopper = () => {
      if (state.popperInstance) {
        state.popperInstance.destroy()
        state.popperInstance = null
      }
    }

    const resetPopper = () => {
      if (state.popperInstance) {
        killPopper()
        createPopper()
      }
    }

    watchEffect(() => {
      state.shouldRender = props.active
      if (props.active) {
        bindPopper()
      } else {
        state.shouldActivate = false
      }
    })

    onMounted(() => {
      resetPopper()
    })
    onBeforeUnmount(() => {
      killPopper()
    })

    return {
      ...toRefs(state),
      popoverClasses,
      popover
    }
  }
  // render () {
  //   return h(
  //     'teleport',
  //     {}, this.$slots.default
  //   )
  // }
}
</script>

<style lang="scss" scoped>
  .sd--popover{
    transition: all .23s ease-in-out;
    height: 32px;
    padding: 0 8px;
    position: fixed;
    z-index: 111;
    pointer-events: none;
    border-radius: 2px;
    font-size: 14px;
    line-height: 32px;
    text-transform: none;
    white-space: nowrap;
    background-color: var(--background-highlight);
    top: 50%;
    left: 50%;
  }
</style>
