<template>
  <li :class="['sd--list__item', classes]">
    <slot name="default" v-if="!loading"/>
    <sd-skeleton v-else/>
    <slot name="expandable"/>
  </li>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    active: Boolean,
    collased: Boolean,
    loading: Boolean,
    // FUTURE: Accordion
    // Need to do more research on a good way to handle this.
    accordion: Boolean
  },
  setup (props) {
    const classes = computed(() => {
      return {
        'is--active': props.active
      }
    })
    return {
      classes
    }
  }
}
</script>

<style lang="scss" scoped>
  .sd--list{
    &__item{
      margin:0;
      // ...
      &.is--active{
        box-shadow: inset 4px 0 0 var(--primary);
        background-color: var(--background-highlight);
      }
    }
  }
</style>
