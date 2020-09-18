<template>
<section>
  <sd-container full>
    <section-header title="Switch" sub-title="I want that one... and that one... and that one." hash="#switch">
      Switch
    </section-header>
    <sd-row>
      <sd-col :md="4">
        <sd-fieldset title="Simple switch with boolean values">
          <sd-switch v-model="simpleCheck">Simple Switch</sd-switch>
        </sd-fieldset>
      </sd-col>
      <sd-col :md="4">
        <sd-fieldset title="Object binding">
          <sd-switch v-model="objectCheck.checked">{{objectCheck.name}}</sd-switch>
        </sd-fieldset>
      </sd-col>
      <sd-col :md="4">
        <sd-fieldset title="Custom true/false values">
          <sd-switch v-model="valueCheck" true-value="yup" false-value="nope">Single Switch w/ value</sd-switch>
        </sd-fieldset>
      </sd-col>
      <sd-col :md="4">
        <sd-fieldset title="Array of switches" stack>
          <sd-switch v-model="arrayCheck" value="First">Simple Switch</sd-switch>
          <sd-switch v-model="arrayCheck" value="Second">{{objectCheck.name}}</sd-switch>
          <sd-switch v-model="arrayCheck" value="Third">Single Switch w/ value</sd-switch>
        </sd-fieldset>
      </sd-col>
    </sd-row>
    <code>simpleCheck: {{simpleCheck}}</code><br/>
    <code>objectCheck: {{objectCheck}}</code><br/>
    <code>valueCheck: {{valueCheck}}</code><br/>
    <code>arrayCheck: {{arrayCheck}}</code><br/>
  </sd-container>
</section>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import { SdSwitch, SdFieldset, SdContainer, SdCol, SdRow } from '@/library'
import SectionHeader from '@/components/SectionHeader'

export default defineComponent({
  name: 'SwitchDemo',
  components: {
    SdSwitch, SdFieldset, SdContainer, SdCol, SdRow, SectionHeader
  },
  setup () {
    const state = reactive({
      simpleCheck: false,
      objectCheck: {
        name: 'Switch object',
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
