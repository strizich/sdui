<template>
  <div class="demo__forms">
    <form-control-demo id="input"/>
    <checkbox-demo id="checkbox"/>
    <switch-demo id="switch"/>
  </div>
</template>

<script>
import FormControlDemo from '@/components/FormControlDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import SwitchDemo from '@/components/SwitchDemo'
export default {
  components: { FormControlDemo, CheckboxDemo, SwitchDemo }
}
</script>

<style lang="scss" scoped>
  .demo__forms{
    padding:32px;
  }
</style>
