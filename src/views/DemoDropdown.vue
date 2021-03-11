<template>
  <div class="demo">
    <section-header
      title="Dropdown"
      sub-title="WIP"
      placement="bottom"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdDropdown"
    />
    <div class="demo__buttons">
      <sd-button rounded icon-only>
        <sd-icon name="more_vert" />
        <sd-dropdown v-model:active="dropdown" auto-close>
          <sd-dropdown-menu title="Auto close disabled">
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
            <sd-button flat align="flex-start">Button</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
      </sd-button>
      <sd-button>
        <span>
          Dropdown
        </span>
        <sd-dropdown auto-close v-model:active="dropdown2">
          <sd-dropdown-menu title="Auto close onClick">
            <sd-button flat align="flex-start" @click.stop="meh">w/ @click.stop</sd-button>
            <sd-button flat align="flex-start">w/o @click.stop</sd-button>
          </sd-dropdown-menu>
        </sd-dropdown>
      </sd-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default defineComponent({
  components: { SectionHeader },
  setup () {
    const dropdown = ref(false)
    const dropdown2 = ref(false)
    const dropdown3 = ref(false)
    const meh = () => {
      console.log('meh')
    }
    return { dropdown, dropdown2, meh, dropdown3 }
  }
})
</script>

<style lang="scss" scoped>
.demo{
  padding:32px;
}
</style>
