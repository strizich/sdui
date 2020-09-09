<template>
  <div :class="['sd--layout']">
    <div class="sd--layout__header">
      <slot name="header"/>
    </div>
      <div :class="['sd--layout__body', layoutClasses]">
          <transition name="sidebar">
            <div :class="['sd--layout__sidebar', sidebarClasses]">
              <slot name="sidebar"/>
            </div>
          </transition>
          <div class="sd--layout__content">
            <slot name="subheader"/>
            <slot name="content"/>
          </div>
      </div>
    <div class="sd--layout__footer">
      <slot name="footer"/>
    </div>
  </div>
  <transition name="fade">
    <sd-overlay v-if="sidebar" :active="floating && sidebar" @click="() => handleOutsideClick()" :transparent="overlay"/>
  </transition>
</template>

<script>
import { reactive, toRefs, computed, watch } from 'vue'
import { SdOverlay } from '@/library'
import { useRouter } from 'vue-router'
export default {
  props: {
    sidebar: Boolean,
    floating: Boolean,
    overlay: Boolean
  },
  components: {
    SdOverlay
  },
  emits: ['update:sidebar'],
  // components: { JsLogo },
  setup (props, { emit }) {
    const route = useRouter()

    watch(() => route.currentRoute.value, (newValue) => {
      if (props.floating) {
        emit('update:sidebar', false)
      }
    })

    const state = reactive({
      count: 0
    })
    const layoutClasses = computed(() => {
      return {
        'sd--layout__body--open': props.sidebar && !props.floating
      }
    })
    const sidebarClasses = computed(() => {
      return {
        'sd--layout__sidebar--open': props.sidebar,
        'sd--layout__sidebar--floating': props.floating
      }
    })

    const handleOutsideClick = () => {
      emit('update:sidebar', false)
    }

    return {
      ...toRefs(state),
      sidebarClasses,
      layoutClasses,
      handleOutsideClick
    }
  }
}
</script>

<style lang="scss">
  .sd--layout {
    min-height: 100vh;
    min-width: 100%;
    position: relative;
    display:flex;
    flex-direction: column;
    &__body {
      display:flex;
      flex-grow: 2;
      height:100%;
      &--open {
        .sd--layout__content {
          transition: margin-left .2s ease-in-out;
          margin-left: 200px;
        }
      }
    }
    &__content {
      flex-grow: 2;
      width: 100%;
      margin-left: 0;
      transition: margin-left .2s ease-in-out;
    }
    &__sidebar {
      transition: opacity .2s ease-in-out, left .2s ease-in-out;
      max-width: 200px;
      width: 100%;
      background: var(--background-highlight);
      align-self: stretch;
      position:fixed;
      top: 50px;
      left: -200px;
      bottom: 0;
      opacity: 1;
      z-index:1000;
      will-change: opacity, left;
      &--open {
        left: 0;
        opacity: 1;
      }
      &--floating{
        z-index: 1002;
      }
    }
    &__header {
      position:sticky;
      width:100%;
      top:0;
      left:0;
      z-index: 1002;
    }
  }
  .sidebar-enter-active, .sidebar-leave-active{
    transition: opacity .2s ease-in-out, left .2s ease-in-out;
    overflow-x: hidden;
  }
  .sidebar-enter-from, .sidebar-leave-to{
    opacity: 0;
    left: -200px;
  }
  .sidebar-enter-to{
    opacity: 1;
    left: 10px;
    background-color:red;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .2s ease-in-out;
  }
  .fade-enter-from, .fade-leave-to{
    transition: opacity .2s ease-in-out;
    opacity: 0;
  }
</style>
