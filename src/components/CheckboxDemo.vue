<template>
<section>
  <h2>Checkboxes</h2>
  <div>
    <sd-fieldset title="Checkboxes">
      <sd-checkbox v-model="simpleCheck">Simple Checkbox</sd-checkbox>
      <sd-checkbox v-model="objectCheck.checked">{{objectCheck.name}}</sd-checkbox>
      <sd-checkbox v-model="valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
    </sd-fieldset>

  </div>
<pre>

<code>
simpleCheck: {{simpleCheck}}
valueCheck: {{valueCheck}}
arrayCheck: {{arrayCheck}}
objectCheck: {{objectCheck}}
</code>
</pre>

</section>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import SdCheckbox from '@/library/components/SdCheckbox'
import { SdFieldset } from '@/library/components/SdField'

export default defineComponent({
  name: 'CheckboxDemo',
  components: {
    SdCheckbox, SdFieldset
  },
  setup () {
    const state = reactive({
      simpleCheck: false,
      objectCheck: {
        name: 'Checkbox object',
        checked: false
      },
      valueCheck: 'nope',
      arrayCheck: []
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
