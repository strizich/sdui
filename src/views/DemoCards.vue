<template>
  <div class="demo__cards">
    <card-demo/>
  </div>
</template>

<script>
import CardDemo from '@/components/CardDemo'
export default {
  components: { CardDemo }
}
</script>

<style lang="scss" scoped>
  .demo__cards{
    padding:32px;
  }
</style>
