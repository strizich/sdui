<template>
  <sd-layout
    @toggle="menuEvent"
    :sidebar="menuOpen"
    :floating="floating"
  >
    <template v-slot:header>
      <the-header
        @toggle="menuEvent"
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
import { reactive, toRefs, watchEffect } from 'vue'
import TheHeader from '@/components/TheHeader'
import TheSidebar from '@/components/TheSidebar'
import useWindowWidth from '@/library/hooks/useWindowWidth'

const floatState = window.localStorage.getItem('SDUI:sidebarFloating') === 'true'
const navState = window.localStorage.getItem('SDUI:navState') === 'true'

export default {
  components: { TheHeader, TheSidebar },
  setup () {
    const state = reactive({
      menuOpen: navState,
      floating: floatState
    })

    const { smallDevice } = useWindowWidth()

    watchEffect(() => {
      if (smallDevice.value) {
        state.floating = smallDevice.value
      }
    })

    const menuEvent = (e) => {
      console.log('menuEvent')
      window.localStorage.setItem('SDUI:navState', e)
      state.menuOpen = e
    }

    const handleSidebarType = (e) => {
      state.floating = e
    }

    return { ...toRefs(state), menuEvent, handleSidebarType, smallDevice }
  }
}
</script>
<style lang="scss">

#app {
  min-height:100vh;
  height: 100%;
}
html, body{
  transition: background-color .6s 0s ease-in,
              color .6s 0s ease-in
              background-color .6s 0s ease-in;
  background-color: var(--background);
  color: var(--text);
}

.scheme{
  display:flex;
  justify-content: flex-end;
  padding: 4px 32px;
  background-color: var(--background-accent);
}

</style>
