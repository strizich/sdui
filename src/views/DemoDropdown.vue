<template>
  <div class="demo">
    <section-header title="Dropdown" sub-title="WIP" placement="bottom"/>
    <div class="demo__buttons">
      <sd-button icon-only rounded @click="dropdown = !dropdown">
        <sd-icon name="more_vert"/>
        <sd-dropdown v-model:active="dropdown">
          <sd-dropdown-menu title="Auto close disabled">
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
      </sd-button>
      <sd-button rounded @click="dropdown2 = !dropdown2">
        <span>Dropdown</span>
        <sd-dropdown auto-close v-model:active="dropdown2">
          <sd-dropdown-menu title="Auto close onClick">
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
      </sd-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SectionHeader from '@/components/SectionHeader'
import { SdButton, SdDropdown, SdDropdownMenu, SdIcon } from '@/library'
export default defineComponent({
  components: { SdButton, SdDropdown, SdDropdownMenu, SdIcon, SectionHeader },
  setup () {
    const dropdown = ref(false)
    const dropdown2 = ref(false)
    return { dropdown, dropdown2 }
  }
})
</script>

<style lang="scss" scoped>
.demo{
  padding:32px;
  &__buttons{
    display: flex;
    .sd--button{
      margin-right: 15px;
    }
  }
}
</style>
