<template>
  <div id="app" :class="scheme">
    <header>
      <sd-fieldset title="Color Scheme">
        <sd-radio v-model="state.mode" value="auto">Auto</sd-radio>
        <sd-radio v-model="state.mode" value="light">Light</sd-radio>
        <sd-radio v-model="state.mode" value="dark">Dark</sd-radio>
      </sd-fieldset>
    </header>
    <router-view/>
  </div>
</template>
<script>
import { reactive, computed, watch, nextTick } from 'vue'
import { SdFieldset } from '@/library/components/SdField'
import SdRadio from '@/library/components/SdRadio'
export default {
  components: { SdRadio, SdFieldset },
  setup () {
    const state = reactive({
      mode: 'auto'
    })
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
      state,
      scheme
    }
  }
}
</script>
<style lang="scss">
@import './library/scss/reset';
@import './library/scss/css-vars';

html, body{
  background-color: var(--background);
  color: var(--text);
}
</style>
