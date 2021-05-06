<template>
    <div>
      <form-control-demo id="input"/>
      <checkbox-demo id="checkbox"/>
      <switch-demo id="switch"/>
      <radio-demo id="radio" />
      <chips-demo id="chips" />
  </div>
</template>

<script>
import ChipsDemo from '@/components/ChipsDemo'
import FormControlDemo from '@/components/FormControlDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import SwitchDemo from '@/components/SwitchDemo'
import RadioDemo from '@/components/RadioDemo'
export default {
  components: { FormControlDemo, CheckboxDemo, SwitchDemo, RadioDemo, ChipsDemo }
}
</script>

<style lang="scss" scoped>
  @import '../../node_modules/@strizich/sdui/dist/scss/breakpoints';
  .demo__forms{
    padding:32px;
  }
</style>
