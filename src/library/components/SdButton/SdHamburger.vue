<template>
   <button ref="hamburgerRef" :class="classes" @click="handleToggle">
      <span class="sd--hamburger" :class="activeClass">
        <i class="sd--hamburger__bar" :class="`bar--${n}`" v-for="n in 3" :key="n"/>
      </span>
    </button>
</template>

<script>
import anime from 'animejs'
import { ref, computed, watch } from 'vue'
import useKeyboardFocus from '@/library/hooks/useKeyboardFocus'

export default {
  name: 'SdHamburger',
  props: {
    active: [Boolean, String],
    animated: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const hamburgerRef = ref(null)
    const isOpen = ref(false)
    const hasFocus = useKeyboardFocus(hamburgerRef)
    watch(() => props.active, (newValue) => {
      animateHamburger(newValue)
    })
    const classes = computed(() => {
      return {
        'sd--button': true,
        'sd--button__flat': true,
        'is--focused': hasFocus.value
      }
    })
    const activeClass = computed(() => {
      return {
        'is--active': isOpen.value
      }
    })

    const animateHamburger = (open) => {
      const tl = anime.timeline({
        duration: 250,
        easing: 'easeInOutQuart'
      })
      if (!open) {
        tl.add({
          targets: '.bar--1',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeInOutQuad' },
            { width: 24, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--3',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeInOutQuad' },
            { width: 24, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--2',
          keyframes: [
            { width: 24, translateX: 0, easing: 'easeInOutQuad' }
          ]
        }, 0)
      } else if (open) {
        tl.add({
          targets: '.bar--1',
          keyframes: [
            { width: 12, easing: 'easeInOutQuad' },
            { rotateZ: -45, translateY: 7, translateX: -4, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--3',
          keyframes: [
            { width: 12, easing: 'easeInOutQuad' },
            { rotateZ: 45, translateY: -7, translateX: -4, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--2',
          keyframes: [
            { width: 21, translateX: 3, easing: 'easeInOutQuad' },
            { translateX: 3 }
          ]
        }, 0)
      }
    }
    const handleToggle = () => {
      isOpen.value = !isOpen.value
      if (props.animated) {
        animateHamburger(isOpen.value)
        emit('update:active', isOpen.value)
      }
    }
    return {
      hasFocus, handleToggle, classes, activeClass, hamburgerRef
    }
  },
  emits: ['update:active']
}
</script>

<style lang="scss" scoped>
.sd--button{
  display:flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:focus{
    outline:none;
  }
  &.is--focused{
    box-shadow: inset 0 0 0 4px var(--primary-accent);
  }
  &__flat{
    background: none;
    height: 50px;
    width: 50px;
  }
}
.sd--hamburger{
  display:flex;
  align-items: stretch;
  height: 16px;
  width: 24px;
  justify-content: space-between;
  flex-direction: column;
  &__bar{
    width: 24px;
    height: 2px;
    background-color: var(--background-inverse);
    display:block;
    text-align: center;
    font-size: 11px;
    transform-origin: 0% 50%;
  }
  &.is--open{
    transform-origin: 0% 100%;
    .bar{
      &--1{
        transform: translateY(7px) translateX(1px) rotateZ(45deg);
        width: 12px;
      }
      &--2{
        transform: translateX(3px);
        width: 21px;
      }
      &--3{
        transform: translateY(-7px) translateX(1px) rotateZ(-45deg);
        width: 12px;
      }
    }
  }
}
</style>
