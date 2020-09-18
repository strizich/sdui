<template>
<div class="demo__tooltip">
  <tooltip-demo/>
</div>
</template>

<script>
import TooltipDemo from '@/components/TooltipDemo'
export default {
  components: {
    TooltipDemo
  }
}
</script>

<style lang="scss" scoped>
.demo__tooltip{
  padding:32px;
}
</style>
