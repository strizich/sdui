<template>
  <sd-container full>
    <section-header
      title="Dropdown"
      sub-title="WIP"
      placement="bottom"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdDropdown"
    />
    <div class="demo__buttons">
      <sd-button-group>
        <sd-button id="dropdrop-trigger">Dropdown</sd-button>
        <sd-button id="dropdrop-trigger-2">Dropdown</sd-button>
        <sd-dropdown trigger="dropdrop-trigger">
          <sd-dropdown-menu title="Dropdown Header">
            <sd-button flat align="flex-start">One</sd-button>
            <sd-button flat align="flex-start">Two</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
        <sd-dropdown trigger="dropdrop-trigger-2">
          <sd-dropdown-menu title="Dropdown Header">
            <sd-button flat align="flex-start">One</sd-button>
            <sd-button flat align="flex-start">Two</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
      </sd-button-group>
    </div>
  </sd-container>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default defineComponent({
  components: { SectionHeader },
  setup () {
    const state = reactive({
      dropdown1: false,
      dropdown2: false
    })
    const toggleDropdown = () => {
      state.dropdown2 = !state.dropdown2
    }
    return { ...toRefs(state), toggleDropdown }
  }
})
</script>

<style lang="scss" scoped>
@import '../../node_modules/@strizich/sdui/dist/scss/breakpoints';

.demo{
  padding:32px;
  @include breakpoint-down('sm'){
    padding: 32px 16px;
  }
}
</style>
