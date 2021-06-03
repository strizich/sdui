<template>
  <section>
    <sd-container full>
      <section-header
        title="Radio Buttons"
        sub-title="Only take one."
        hash="#radios"
        git="https://github.com/strizich/sdui-vite/blob/master/src/lib/components/SdRadio/SdRadio.vue"
      />
      <sd-grid>
        <sd-cell :md="12">
          <sd-fieldset title="Radios">
            <sd-radio name="radios" v-model="state.string" value="Radio 1">Radio 1</sd-radio>
            <sd-radio name="radios" v-model="state.string" value="Radio 2">Radio 2</sd-radio>
            <sd-radio name="radios" v-model="state.string" value="Radio 3" disabled>Radio 2</sd-radio>
          </sd-fieldset>
        </sd-cell>
      </sd-grid>
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
