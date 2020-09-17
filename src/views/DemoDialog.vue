<template>
  <div class="demo__dialog">
    <dialog-demo/>
  </div>
</template>

<script>
import DialogDemo from '@/components/DialogDemo'
export default {
  components: { DialogDemo }
}
</script>

<style lang="scss" scoped>
.demo__dialog{
  padding:32px;
}
</style>
