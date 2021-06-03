<template>
<section>
  <sd-container full>
    <section-header
    title="Checkbox"
    sub-title="I want that one... and that one... and that one."
    hash="#checkbox"
    git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdCheckbox"
    >
      Checkbox
    </section-header>
    <sd-grid>
      <sd-cell :sm="6" :md="4">
        <sd-fieldset title="Simple checkbox with boolean values">
          <sd-checkbox v-model="simpleCheck">Simple Checkbox</sd-checkbox>
        </sd-fieldset>
      </sd-cell>
      <sd-cell :sm="6" :md="4">
        <sd-fieldset title="Object binding">
          <sd-checkbox v-model="objectCheck.checked">{{objectCheck.name}}</sd-checkbox>
        </sd-fieldset>
      </sd-cell>
      <sd-cell :sm="6" :md="4">
        <sd-fieldset title="Custom true/false values">
          <sd-checkbox v-model="valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
        </sd-fieldset>
      </sd-cell>
      <sd-cell :sm="6" :md="4">
        <sd-fieldset title="Array of checkboxes" stack>
          <sd-checkbox v-model="arrayCheck" value="First">Simple Checkbox</sd-checkbox>
          <sd-checkbox v-model="arrayCheck" value="Second">{{objectCheck.name}}</sd-checkbox>
          <sd-checkbox v-model="arrayCheck" value="Third">Single Checkbox w/ value</sd-checkbox>
        </sd-fieldset>
      </sd-cell>
    </sd-grid>
    <code>simpleCheck: {{simpleCheck}}</code><br/>
    <code>objectCheck: {{objectCheck}}</code><br/>
    <code>valueCheck: {{valueCheck}}</code><br/>
    <code>arrayCheck: {{arrayCheck}}</code><br/>
  </sd-container>
</section>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import SectionHeader from '@/components/SectionHeader'

export default defineComponent({
  name: 'CheckboxDemo',
  components: {
    SectionHeader
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
