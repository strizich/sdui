<template>
<sd-container full>
  <section-header
    title="Widget"
    sub-title="Not a gizmo"
    git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdGrid"
  />
  <widget-demo />
</sd-container>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import WidgetDemo from '@/components/WidgetDemo'

export default {
  components: {
    WidgetDemo,
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
.demo__tooltip{
  padding:32px;
}
</style>
