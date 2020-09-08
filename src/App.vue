<template>
  <sd-layout :sidebar="menuOpen">
    <template v-slot:header>
      <the-header
      :aside-open="menuOpen"
      @menu-open="menuEvent" />
    </template>
    <template v-slot:sidebar>
      <the-sidebar/>
    </template>
    <template v-slot:content>
      <router-view/>
    </template>
    <template v-slot:footer>

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
      menuOpen: false
    })

    const menuEvent = (e) => {
      state.menuOpen = e
    }

    return { ...toRefs(state), menuEvent }
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
