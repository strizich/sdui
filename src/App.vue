<template>
  <sd-layout
    @update:sidebar="menuEvent"
    :sidebar="menuOpen"
    :floating="floating"
  >
    <template v-slot:header>
      <the-header
        @menu-open="menuEvent"
        :aside-open="menuOpen"
      />
    </template>
    <template v-slot:sidebar>
      <the-sidebar
        v-model:floating="floating"
        :smallDevice="smallDevice"
      />
    </template>
    <template v-slot:content>
      <router-view/>
    </template>
  </sd-layout>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheSidebar from '@/components/TheSidebar'
import { SdLayout } from '@/library'
import { reactive, toRefs, watchEffect } from 'vue'
import useWindowWidth from '@/library/hooks/useWindowWidth'

const floatState = window.localStorage.getItem('SDUI:sidebarFloating') === 'true'

export default {
  components: { SdLayout, TheHeader, TheSidebar },
  setup () {
    const state = reactive({
      menuOpen: false,
      floating: floatState
    })

    const { smallDevice } = useWindowWidth()

    watchEffect(() => {
      if (smallDevice.value) {
        state.floating = smallDevice.value
      }
    })

    const menuEvent = (e) => {
      state.menuOpen = e
    }
    const handleSidebarType = (e) => {
      state.floating = e
      console.log(e)
    }

    return { ...toRefs(state), menuEvent, handleSidebarType, smallDevice }
  }
}
</script>
<style lang="scss">
@import './library/scss/css-vars';

#app {
  min-height:100vh;
  height: 100%;
}
html, body{
  transition: background .6s 0s ease-in,
              color .6s 0s ease-in
              background-color .6s 0s ease-in;
  background-color: var(--background);
  color: var(--text);
}

.scheme{
  display:flex;
  justify-content: flex-end;
  padding: 4px 32px;
  background: var(--background-accent);
}

</style>
