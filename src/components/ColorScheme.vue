<template>
  <div>
    <sd-fieldset title="Color Scheme" stack>
      <sd-select v-model="mode" block>
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </sd-select>
    </sd-fieldset>
  </div>
</template>

<script>
import { computed, watch, reactive, toRefs, nextTick } from 'vue'
export default {
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
    return { ...toRefs(state) }
  }
}
</script>

<style lang="scss" scoped>

</style>
