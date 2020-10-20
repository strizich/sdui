<template>
  <div class="demo">
    <progress-demo id="progress" />
    <skeleton-demo id="skeleton" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProgressDemo from '@/components/ProgressDemo'
import SkeletonDemo from '@/components/SkeletonDemo'
export default defineComponent({
  components: { ProgressDemo, SkeletonDemo }
})
</script>

<style lang="scss" scoped>

</style>
