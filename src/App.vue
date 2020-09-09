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
        :type="sidebarType"
        @update:type="handleSidebarType"
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
import { reactive, toRefs } from 'vue'

export default {
  components: { SdLayout, TheHeader, TheSidebar },
  setup () {
    const state = reactive({
      menuOpen: false,
      floating: false,
      sidebarType: 'fixed'
    })

    const menuEvent = (e) => {
      state.menuOpen = e
    }

    const outsideClick = (e) => {
      state.menuOpen = e
    }

    const handleSidebarType = (e) => {
      state.sidebarType = e
      if (e === 'floating') {
        state.floating = true
      } else {
        state.floating = false
      }
    }

    return { ...toRefs(state), menuEvent, outsideClick, handleSidebarType }
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
