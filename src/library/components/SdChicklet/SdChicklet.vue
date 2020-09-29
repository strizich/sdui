<template>
  <div :class="['sd--chicklet', themeClasses]">
    <span class="sd--chicklet__content">
      <slot/>
    </span>
    <sd-icon v-if="dismissable" name="close" size="sm"/>
  </div>
</template>

<script>
import { SdIcon } from '@/library'
import { computed } from 'vue'
export default {
  components: { SdIcon },
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    dismissable: Boolean
  },
  setup (props) {
    const themeClasses = computed(() => {
      return `sd--chicklet__${props.theme}`
    })
    return { themeClasses }
  }
}
</script>

<style lang="scss" scoped>
@import '../SdElevation/mixins';
@import '../../scss/colors';
.sd--chicklet {
  padding: 4px;
  font-size: 14px;
  display:inline-flex;
  align-items: center;
  transition: background-color .23s ease-in-out;
  margin: 4px 0 4px 4px;
  @each $state, $color in $sd-color-global {
    $base: nth($color, 1);
    $highlight: nth($color, 2);
    $accent: nth($color, 3);
    $contrast: sd-pick-contrast($base);
    $contrast-highlight: sd-pick-contrast($highlight);
    $contrast-accent: sd-pick-contrast($accent);

    &__#{$state} {
      @include elevation(2);
      color: sd-color($contrast, text);
      background-color: $base;
      transition: all .13s ease-out;
      border-radius: 3px;
    }
  }
  &__content{
    margin-right: 4px;
  }
}
</style>
