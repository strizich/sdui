<template>
  <sd-container full>
    <elevation-demo/>
  </sd-container>
</template>

<script>
import ElevationDemo from '@/components/ElevationDemo'
export default {
  components: { ElevationDemo }
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/@strizich/sdui/dist/scss/breakpoints';

.demo{
  padding:32px;
  @include breakpoint-down('sm'){
    padding: 32px 16px;
  }
}
</style>
