<template>
  <sd-container full>
    <section-header
      title="Dropdown"
      sub-title="WIP"
      placement="bottom"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdMenu"
    />
  </sd-container>
  <sd-container>
    <sd-menu>
      <sd-button trigger>Dropdown</sd-button>
      <sd-menu-content>
        <sd-button-group>
          <sd-button align="flex-start">One</sd-button>
          <sd-button align="flex-start">Two</sd-button>
        </sd-button-group>
      </sd-menu-content>
    </sd-menu>
    <sd-menu>
      <sd-button-group>
        <sd-button>Dropdown</sd-button>
        <sd-button icon="keyboard_arrow_down" trigger icon-only/>
      </sd-button-group>
      <sd-menu-content placement="bottom-end">
        <sd-button-group vertical>
          <sd-button flat align="flex-start" block>Menu Option 1</sd-button>
          <sd-button flat align="flex-start" block>Menu Option 2</sd-button>
        </sd-button-group>
      </sd-menu-content>
    </sd-menu>
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

</style>
