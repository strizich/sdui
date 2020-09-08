<template>
  <header class="sd--header">
    <div class="sd--header__container">
      <sd-hamburger :active="asideOpen" @toggled="handleMenu"/>
      <div class="sd--header__content">
        <div class="sd--header__brand">
          <slot name="brand" />
        </div>
        <nav class="sd--header__nav">
          <slot name="nav" />
        </nav>
      </div>
    </div>
    <div class="sd--header__subheader">
      <slot name="subheader"/>
    </div>
  </header>
</template>

<script>
import { SdHamburger } from '@/library'
import SdThrottle from '@/library/core/utilities/SdThrottle'
import { reactive, computed, onMounted, onUnmounted } from 'vue'
export default {
  emits: ['toggle-aside'],
  components: { SdHamburger },
  props: {
    asideOpen: Boolean,
    drawerFloat: Boolean
  },
  setup (props, { emit }) {
    const state = reactive({
      windowWidth: 0
    })

    const sidebar = reactive({
      open: false
    })

    const getStoredMenuState = () => {
      const state = window.localStorage.getItem('SDUI:navState')
      sidebar.open = (state === 'true')
      emit('toggle-aside', sidebar.open)
    }

    const updateWindowWidth = () => {
      const width = window.innerWidth
      state.windowWidth = width
      if (isWindowSmall.value === true) {
        window.localStorage.setItem('SDUI:navState', false)
        emit('toggle-aside', false)
      }
    }

    const addResizeListener = () => {
      window.addEventListener('resize', () => {
        SdThrottle(600, updateWindowWidth())
      }, false)
    }

    const removeResizeListener = () => {
      window.removeEventListener('resize', () => {
        props.updateWindowWidth()
      }, false)
    }

    const isWindowSmall = computed(() => {
      if (state.windowWidth <= 768) {
        return true
      }
      return false
    })

    const handleMenu = (e) => {
      if (!isWindowSmall.value) {
        window.localStorage.setItem('SDUI:navState', !props.asideOpen)
      } else {
        window.localStorage.setItem('SDUI:navState', false)
      }
      emit('toggle-aside', e)
    }

    onMounted(() => {
      addResizeListener()
    })

    onUnmounted(() => {
      removeResizeListener()
    })

    updateWindowWidth()
    getStoredMenuState()

    return { handleMenu }
  }
}
</script>

<style lang="scss" scoped>
.sd--header{
  &__container{
    display: flex;
  }
  &__content{
    width: 100%;
    flex-wrap: wrap;
    padding: 8px 0px 8px 16px;
    background-color: var(--background-highlight);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__brand{
    flex-grow: 1;
  }
  &__nav{
    nav{
      flex-grow: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__subheader{
    width: 100%;
  }
}

</style>
