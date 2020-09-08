<template>
  <div class="sd--layout">
    <div class="sd--header">
      <slot name="header"/>
    </div>
    <div class="sd--layout__body">
      <transition name="sidebar">
      <div :class="['sd--layout__sidebar', sidebarClasses]" v-show="sidebar">
        <slot name="sidebar"/>
      </div>
      </transition>
      <div class="sd--layout__content">
        <slot name="content"/>
      </div>
    </div>
    <div class="sd--layout__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
// import JsLogo from '@/components/JsLogo'

export default {
  props: {
    sidebar: Boolean,
    floating: Boolean
  },
  // components: { JsLogo },
  setup (props) {
    const state = reactive({
      count: 0
    })
    const sidebarClasses = computed(() => {
      return {
        'is--floating': props.floatingSidebar
      }
    })
    return {
      ...toRefs(state),
      sidebarClasses
    }
  }
}
</script>

<style lang="scss">
  .sd--layout{
    min-height: 100%;
    height: fit-content;
    width: 100%;
    &__body{
      display:flex;
    }
    &__content{
      flex-grow: 2;
      width: 100%;
    }
    &__sidebar{
      width: 100%;
      max-width: 200px;
      background: var(--background-accent);
      height: 100vh;
      position:sticky;
      top: 0;
    }
  }
  .sidebar-enter-active, .sidebar-leave-active{
    transition: width .2s ease-in-out;
    overflow-x: hidden;
  }
  .sidebar-enter-from, .sidebar-leave-to{
    width: 0px;
  }
</style>
