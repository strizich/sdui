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
    <template v-slot:subheader>
      <div class="scheme">
        <sd-fieldset title="Color Scheme" inline-label>
          <sd-radio v-model="mode" value="auto">Auto</sd-radio>
          <sd-radio v-model="mode" value="light">Light</sd-radio>
          <sd-radio v-model="mode" value="dark">Dark</sd-radio>
        </sd-fieldset>
      </div>
    </template>
  </sd-header>
</template>

<script>
import { computed, watch, reactive, toRefs, nextTick } from 'vue'
import JsLogo from '@/components/JsLogo'
import { SdHeader, SdButton, SdRadio, SdFieldset } from '@/library'

export default {
  emits: ['menu-open'],
  components: {
    JsLogo, SdHeader, SdButton, SdRadio, SdFieldset
  },
  props: {
    asideOpen: Boolean
  },
  setup (props, { emit }) {
    const state = reactive({
      mode: 'auto'
    })

    const handleMenu = (e) => {
      emit('menu-open', e)
      console.log('the header', e)
    }

    const scheme = computed(() => {
      return `sd--scheme--${state.mode}`
    })
    watch(() => scheme.value, (newValue, oldValue) => {
      nextTick().then(() => {
        document.body.classList.remove(`${oldValue}`)
        document.body.classList.add(`${newValue}`)
      })
    })

    return {
      ...toRefs(state),
      handleMenu
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
