<template>
  <div id="app" :class="scheme">
    <header>
      <div class="branding">
        <js-logo/>
      </div>
      <nav>
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
      </nav>
    </header>
    <div class="scheme">
      <sd-fieldset title="Color Scheme" inline-label>
        <sd-radio v-model="state.mode" value="auto">Auto</sd-radio>
        <sd-radio v-model="state.mode" value="light">Light</sd-radio>
        <sd-radio v-model="state.mode" value="dark">Dark</sd-radio>
      </sd-fieldset>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
import { reactive, computed, watch, nextTick } from 'vue'
import JsLogo from '@/components/JsLogo'
import SdRadio from '@/library/components/SdRadio'
import { SdFieldset } from '@/library/components/SdField'
import SdButton from '@/library/components/SdButton'
export default {
  components: { JsLogo, SdRadio, SdFieldset, SdButton },
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
header{
  padding: 8px 32px;
  background-color: var(--background-highlight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .branding{
    flex-grow: 1;
  }
  nav{
    flex-grow: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.scheme{
  display:flex;
  justify-content: flex-end;
  padding: 4px 32px;
  background: var(--background-accent);
}
</style>
