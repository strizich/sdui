<template>
  <section>
    <sd-container full>
      <section-header hash="#radios" title="Radio Buttons" sub-title="Only take one." />
      <sd-row>
        <sd-col :md="12">
          <sd-fieldset title="Radios">
            <sd-radio name="radios" v-model="state.string" value="Radio 1">Radio 1</sd-radio>
            <sd-radio name="radios" v-model="state.string" value="Radio 2">Radio 2</sd-radio>
            <sd-radio name="radios" v-model="state.string" value="Radio 3" disabled>Radio 2</sd-radio>
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
import SectionHeader from '@/components/SectionHeader'

export default defineComponent({
  components: { SectionHeader },
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
