<template>
  <sd-header :aside-open="asideOpen" @toggle-aside="(e) => handleMenu(e)">
    <template v-slot:brand>
      <js-logo/>
    </template>
    <template v-slot:nav>
      <div class="link">
        <sd-button
          type="link"
          href="https://github.com/strizich/v3-jsdesign"
          target="_blank"
          flat
        >
          Github
        </sd-button>
      </div>
    </template>
  </sd-header>
</template>

<script>
import { defineComponent } from 'vue'
import JsLogo from '@/components/JsLogo'
import { SdHeader, SdButton } from '@/library'

export default defineComponent({
  emits: ['menu-open'],
  components: {
    JsLogo, SdHeader, SdButton
  },
  props: {
    asideOpen: Boolean
  },
  setup (props, { emit }) {
    const handleMenu = (e) => {
      emit('menu-open', e)
    }

    return {
      handleMenu
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
