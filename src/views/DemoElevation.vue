<template>
  <div class="demo">
    <section-header hash="#elevation" title="Elevation" sub-title="Feeling a bit light headed."/>
    <elevation-demo/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import ElevationDemo from '@/components/ElevationDemo'
export default {
  components: { ElevationDemo, SectionHeader }
}
</script>

<style lang="scss" scoped>
.demo{
  padding:40px;
}
</style>
