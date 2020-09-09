<template>
  <section>
    <sd-container full>
      <h2>Radio buttons</h2>
      <sd-row>
        <sd-col :md="12">
          <sd-fieldset title="Radios">
            <sd-radio name="radios" v-model="state.string" value="Radio 1">Radio 1</sd-radio>
            <sd-radio name="radios" v-model="state.string" value="Radio 2">Radio 2</sd-radio>
          </sd-fieldset>
        </sd-col>
      </sd-row>
<pre>
<code>
{{state}}
</code>
</pre>
    </sd-container>
  </section>
</template>

<script>
import { reactive, defineComponent } from 'vue'
import { SdRadio, SdFieldset, SdContainer, SdRow, SdCol } from '@/library'

export default defineComponent({
  components: {
    SdFieldset, SdRadio, SdContainer, SdRow, SdCol
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
