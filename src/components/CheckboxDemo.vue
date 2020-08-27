<template>
<section>
  <h2>Checkboxes</h2>
  <div>
    <sd-fieldset title="Simple checkbox with boolean values">
      <sd-checkbox v-model="simpleCheck">Simple Checkbox</sd-checkbox>
    </sd-fieldset>
    <sd-fieldset title="Object binding">
      <sd-checkbox v-model="objectCheck.checked">{{objectCheck.name}}</sd-checkbox>
    </sd-fieldset>
    <sd-fieldset title="Custom true/false values">
      <sd-checkbox v-model="valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
    </sd-fieldset>
    <sd-fieldset title="Array of checkboxes" stack>
      <sd-checkbox v-model="arrayCheck" value="First">Simple Checkbox</sd-checkbox>
      <sd-checkbox v-model="arrayCheck" value="Second">{{objectCheck.name}}</sd-checkbox>
      <sd-checkbox v-model="arrayCheck" value="Third">Single Checkbox w/ value</sd-checkbox>
    </sd-fieldset>
  </div>
<pre>

<code>
simpleCheck: {{simpleCheck}}
objectCheck: {{objectCheck}}
valueCheck: {{valueCheck}}
arrayCheck: {{arrayCheck}}
</code>
</pre>

</section>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import { SdCheckbox, SdFieldset } from '@/library'

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
