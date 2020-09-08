<template>
  <div class="sd--layout">
    <div class="sd--layout__header">
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

export default {
  props: {
    sidebar: Boolean,
    floating: Boolean,
    persistSidebar: Boolean
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
    min-height: 100vh;
    min-width: 100%;
    position: relative;
    display:flex;
    flex-direction: column;
    &__header{
      position:sticky;
      width:100%;
      top:0;
      left:0;
      z-index: 100;
    }
    &__body{
      display:flex;
      flex-grow: 2;
      height:100%;
    }
    &__content{
      flex-grow: 2;
      width: 100%;
    }
    &__sidebar{
      width: 100%;
      max-width: 200px;
      background: var(--background-highlight);
      align-self: stretch;
      position:sticky;
      top: 50px;
      left:0;
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
