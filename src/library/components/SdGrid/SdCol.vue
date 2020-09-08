<template>
  <div :class="[breakpointClasses]" :style="{order}">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'SdCol',
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    order: Number
  },
  setup (props) {
    const breakpointClasses = computed(() => {
      const classes = []
      const breakpointXs = `sd--col--xs--${props.xs}`
      const breakpointSm = `sd--col--sm--${props.sm}`
      const breakpointMd = `sd--col--md--${props.md}`
      const breakpointLg = `sd--col--lg--${props.lg}`
      const breakpointXl = `sd--col--xl--${props.xl}`

      if (props.xs) {
        classes.push(breakpointXs)
      }
      if (props.sm) {
        classes.push(breakpointSm)
      }
      if (props.md) {
        classes.push(breakpointMd)
      }
      if (props.lg) {
        classes.push(breakpointLg)
      }
      if (props.xl) {
        classes.push(breakpointXl)
      }
      return classes
    })
    return { breakpointClasses }
  }
}
</script>

<style lang="scss">
  @if $enable-grid-classes {
    @include make-grid-columns();
  }
</style>
