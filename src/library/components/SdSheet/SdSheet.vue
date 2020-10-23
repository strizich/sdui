<template>
  <div :class="[classes]">
    <slot/>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SdSheet',
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    padded: Boolean
  },
  setup (props) {
    const classes = computed(() => {
      const theme = 'sd--sheet__' + props.theme
      return {
        'sd--sheet': true,
        [theme]: true,
        'is--padded': props.padded
      }
    })
    // FUTURE: Change z-index on hover
    // FUTURE: Customizable elevation
    // FUTURE: Allow for color gradiants with user set background colors.
    return { classes }
  }
})
</script>

<style lang="scss">
@import '../SdElevation/mixins';
.sd--sheet {
  height: 100%;
  border-radius: 1px;
  @include elevation(12);
  &.is--padded{
    padding: 16px;
  }
  @each $state, $color in $sd-color-global {
    &__#{$state} {
      background-color: var(--#{$state});
      color: var(--#{$state}-text)
    }
  }
}
</style>
