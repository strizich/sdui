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
import { watch, reactive, toRefs } from 'vue'
export default {
  emits: ['selected'],
  setup (props, { emit }) {
    const state = reactive({
      mode: 'auto'
    })
    watch(() => state.mode, (newValue) => {
      emit('selected', newValue)
    })
    return { ...toRefs(state) }
  }
}
</script>

<style lang="scss" scoped>

</style>
