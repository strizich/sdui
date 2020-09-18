<template>
  <div class="sidebar">
    <div>
      <sd-nav>
        <sd-nav-link to="/" icon="home">Home</sd-nav-link>
        <sd-nav-link to="/about" icon="info">About</sd-nav-link>
      </sd-nav>
      <sd-nav title="Components">
        <sd-nav-link to="/components/buttons">Button</sd-nav-link>
        <sd-nav-link to="/components/form-controls">Inputs</sd-nav-link>
        <sd-nav-link to="/components/form-controls#input" variant="sub">Input</sd-nav-link>
        <sd-nav-link to="/components/form-controls#checkbox" secondary>Checkbox</sd-nav-link>
        <sd-nav-link to="/components/form-controls#switch" secondary>Switch</sd-nav-link>
        <sd-nav-link to="/components/slider">Slider</sd-nav-link>
        <sd-nav-link to="/components/icons">Icons</sd-nav-link>
        <sd-nav-link to="/components/dialog">Dialog</sd-nav-link>
        <sd-nav-link to="/components/cards">Cards</sd-nav-link>
        <sd-nav-link to="/components/tooltips">Tooltip</sd-nav-link>
      </sd-nav>
    </div>
    <div class="sidebar__options">
      <color-scheme />
      <template v-if="!smallDevice">
        <hr class="sd--divider" />
        <sd-fieldset stack >
          {{float}} {{floating}}
          <sd-checkbox v-model="float">Floating Sidebar</sd-checkbox>
        </sd-fieldset>
      </template>
    </div>
  </div>
</template>

<script>
import ColorScheme from '@/components/ColorScheme'
import { reactive, toRefs, watch, onUnmounted } from 'vue'
import { SdFieldset, SdCheckbox, SdNav, SdNavLink } from '@/library'
export default {
  name: 'TheSidebar',
  components: {
    ColorScheme,
    SdFieldset,
    SdCheckbox,
    SdNavLink,
    SdNav
  },
  emits: ['update:floating'],
  props: {
    floating: Boolean,
    smallDevice: Boolean
  },
  setup (props, { emit }) {
    const sidebar = reactive({
      float: props.floating
    })

    watch(() => props.smallDevice, (newValue) => {
      if (newValue) {
        sidebar.float = newValue
      }
    })

    watch(() => sidebar.float, (newValue) => {
      window.localStorage.setItem('SDUI:sidebarFloating', newValue)
      emit('update:floating', newValue)
    })

    onUnmounted(() => {
      window.localStorage.setItem('SDUI:sidebarFloating', sidebar.float)
    })
    return {
      ...toRefs(sidebar)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 100vh;
  overflow-y: auto ;
  overflow-x: hidden;
  &__list{
    margin:32px 0 0 0;
    padding:0;
  }
  &__item{
    margin:0;
    padding:0;
  }
  &__link{
    display: flex;
    align-items: center;
    padding: 4px 8px;
    margin: 0 16px;
    color: var(--primary-highlight);
    border-radius: 3px;
    position: relative;
    &:hover{
      transition:background-color .23s ease-in-out;
      background-color: var(--background-highlight)
    }
    &:after{
      transition: left .23s ease-in-out;
      content:'';
      position: absolute;
      top:0;
      right:0;
      left:100%;
      bottom:0;
      background: var(--primary);
      z-index: 99;
    }
    &--active{
      color: #fff;
      &:after{
        background: var(--primary);
        left:0%;
      }
    }
    & > .sd--icon{
      position: relative;
      z-index: 100;
    }
    & > span{
      margin-left: 8px;
      position: relative;
      z-index: 100;
    }
  }
  &__options{
    margin: 8px 16px;
  }
}
</style>
