<template>
  <section>
    <h2>Radio buttons</h2>
    <sd-fieldset title="Radios">
      <sd-radio name="radios" v-model="state.string" value="Radio 1">Radio 1</sd-radio>
      <sd-radio name="radios" v-model="state.string" value="Radio 2">Radio 2</sd-radio>
    </sd-fieldset>
<pre>
<code>
{{state}}
</code>
</pre>
  </section>
</template>

<script>
import { reactive, defineComponent } from 'vue'
import { SdFieldset } from '@/library/components/SdField'
import SdRadio from '@/library/components/SdRadio'

export default defineComponent({
  components: {
    SdFieldset, SdRadio
  },
  setup () {
    const state = reactive({
      string: ''
    })
    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
