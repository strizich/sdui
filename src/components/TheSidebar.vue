<template>
  <div class="sidebar">
    <div>
      <sd-nav>
        <sd-nav-link
          v-for="(link, index) in navigation.mainNavigation"
          :to="link.route"
          :icon="link.icon"
          :key="`main-nav-${index}`"
        >
          {{link.label}}
        </sd-nav-link>
      </sd-nav>
      <sd-nav title="Components">
        <sd-nav-link
          v-for="(link, index) in navigation.componentNavigation"
          :to="link.route"
          :key="`component-nav-${index}`"
          :secondary="link.secondary"
        >
          {{link.label}}
        </sd-nav-link>
      </sd-nav>
    </div>
    <div class="sidebar__options">
      <color-scheme @selected="(e) => handleSchemeChange(e)"/>
      <template v-if="!smallDevice">
        <hr class="sd--divider" />
        <sd-fieldset stack >
          <sd-checkbox v-model="float">Floating Sidebar</sd-checkbox>
        </sd-fieldset>
      </template>
    </div>
  </div>
</template>

<script>
import { MAIN_NAVIGATION, COMPONENT_NAVIGATION } from '@/assets/navigationConfig'
import ColorScheme from '@/components/ColorScheme'
import { reactive, toRefs, watch, onUnmounted } from 'vue'
export default {
  name: 'TheSidebar',
  components: {
    ColorScheme
  },
  emits: ['update:floating', 'selectedScheme'],
  props: {
    floating: Boolean,
    smallDevice: Boolean
  },
  setup (props, { emit }) {
    const navigation = reactive({
      mainNavigation: MAIN_NAVIGATION,
      componentNavigation: COMPONENT_NAVIGATION
    })
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

    const handleSchemeChange = (event) => {
      emit('selectedScheme', event)
    }

    onUnmounted(() => {
      window.localStorage.setItem('SDUI:sidebarFloating', sidebar.float)
    })
    return {
      ...toRefs(sidebar),
      navigation,
      handleSchemeChange
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
