<template>
  <teleport to="#app">
    <transition name="dialog">
      <div
        class="sd--dialog"
        v-if="active"
      >
        <div
          :class="['sd--dialog__wrapper', classes ]"
          @keydown.esc="onEsc"
          >
            <div class="sd--dialog__container">
              <slot />
            </div>
        </div>
      <sd-overlay
        :parent="`#${id}`"
        fixed
        :class="backdropClass"
        :blur="backdropBlur"
        :active="active"
        @click="onOutsideClick"
        v-if="backdrop"
      />
    </div>
    </transition>
  </teleport>
</template>

<script>
import { watch, computed, nextTick } from 'vue'
import '@/library/components/SdElevation'
import SdOverlay from '@/library/components/SdOverlay/SdOverlay'
import sdUuid from '@/library/core/utilities/SdUuid'
export default {
  name: 'SdDialog',
  props: {
    id: {
      type: String,
      default: 'modal-' + sdUuid()
    },
    active: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    },
    backdropClass: {
      type: String,
      default: 'sd--dialog__overlay'
    },
    backdropBlur: Boolean,
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md'
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    aside: Boolean
  },
  components: {
    SdOverlay
  },

  setup (props, { emit }) {
    const classes = computed(() => {
      const sizeClass = `is--${props.size}`
      return {
        [sizeClass]: true,
        'is--aside': props.aside,
        'is--fullscreen': props.fullscreen && !props.aside
      }
    })
    watch(() => props.active, () => {
      nextTick().then(() => {
        if (props.active) {
          document.body.classList.add('sd--dialog--open')
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
          document.body.style.left = '0'
          document.body.style.right = '0'
          emit('sd-opened')
        } else {
          const scrollY = document.body.style.top
          document.body.classList.remove('sd--dialog--open')
          document.body.removeAttribute('style')
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
          emit('sd-closed')
        }
      })
    })

    const closeModal = () => {
      emit('update:active', false)
    }

    const onOutsideClick = () => {
      if (props.clickOutsideToClose) {
        closeModal()
      }
      emit('clicked-outside')
    }

    const onEsc = () => {
      if (props.closeOnEsc) {
        closeModal()
      }
    }

    return {
      onEsc,
      onOutsideClick,
      closeModal,
      classes
    }
  }
}
</script>

<style lang="scss">
  .sd--dialog{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    z-index: 1000;

    &--open{
      @include breakpoint-up('sm') {
        padding-right: 10px;
      }
    }
    &__wrapper{
      min-width: 300px;
      max-width: 80%;
      max-height: 80%;
      height:100%;
      width:100%;
      margin: auto;
      display: flex;
      flex-flow: column;
      flex-direction: row;
      overflow: hidden;
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 1002;
      border-radius: 2px;
      backface-visibility: hidden;
      pointer-events: auto;
      transform: translate(-50%, -50%);
      transform-origin: center center;
      transition: opacity .2s ease-in-out,
                  transform .2s  ease-in-out;
      will-change: opacity, transform, left, top;
           &.is{
      &--sm{
        width: 25%;
        height: auto;
      }
      &--md{
        width: 60%;
        height: 80%;
        &.is--aside{
          width: 40%
        }
      }
      &--lg{
        width: 90%;
        &.is--aside{
          width: 70%
        }
      }
      &--fullscreen{
        @include breakpoint-down('sm'){
          max-width: 100%;
          max-height: 100%;
          min-width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 0;
          transform: none;
        }
      }
      &--aside{
        min-height: 100%;
        left: 100%;
        top:0;
        bottom:0;
        right: 0;
        transform: translate3D(-100%, 0, 0);
        overflow: hidden;
        transition: opacity .5s ease-in-out,
                    transform .5s  ease-in-out;
        will-change: transform, opacity;
        @include breakpoint-down('sm'){
          left: 0;
          right: 0;
          top:0;
          bottom:0;
          min-width: 100%;
          transform: none;
          opacity: 1;
        }
        .sd--dialog__content{
            // min-height: 100%;
            flex-grow: 3;
            max-height: 100%;
          }
        }
      }
    }
    &__container{
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
      &:focus{
        outline: none;
      }
    }
  }

.dialog-leave-active {
  transition: opacity .3s ease-in-out,
              transform .3s  ease-in-out;
}
.dialog-enter-from, .dialog-leave-to{
  .is--fullscreen{
    transform: translate3D(-50%, -55%, 0);
    opacity: 0;
    @include breakpoint-down("sm"){
      transform: translate3D(0, 100%, 0);
    }
  }
  .is--aside{
    transform: translate3D(100%, 0, 0);
    @include breakpoint-down("sm"){
      transform: translate3D(0, 100%, 0);
    }
  }
  .sd--dialog__overlay{
    opacity: 0;
  }

}
</style>
