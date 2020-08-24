<template>
  <div :class="['sd--card', cardElevation]">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
import '@/library/components/SdElevation'
export default {
  props: {
    title: String,
    baseClass: {
      type: String,
      default: 'sd--card'
    },
    elevation: {
      type: [Number, String],
      default: 6
    }
  },
  setup (props) {
    const cardElevation = computed(() => {
      return `sd--elevation--${props.elevation}`
    })
    return { cardElevation }
  }
}
</script>

<style lang="scss">
.sd--card{
  background-color: v(--background-highlight);
  border-radius: 3px;
  display:flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  &:hover{
    z-index: 10;
  }
  &--inset{
    padding: 0 16px;
  }
  &--offset{
    padding: 0 0 0 16px;
  }
}
</style>
