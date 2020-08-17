<template>
  <fieldset class="sd--field__group">
    <legend class="sd--field__legend">
      {{title}}
    </legend>
    <div :class="['sd--field__block', classes]">
      <slot />
    </div>
  </fieldset>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    title: String,
    stack: Boolean
  },
  setup (props) {
    const classes = computed(() => {
      return {
        'is--stacked': props.stack
      }
    })

    return { classes }
  }
})
</script>

<style lang="scss">
.sd--field{
  &__group{
    padding: 0 0 16px 0;
  }
  &__block{
    display:flex;
    width: 100%;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    &.is{
      &--stacked{
        flex-direction: column;
        width:100%;
        align-content: flex-start;
        .sd--checkbox{
          margin-left:0;
          margin-right: 0;
        }
        .sd--radio{
          margin-left:0;
          margin-right: 0;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .sd--button{
          margin: 4px;
        }
      }
    }
  }
}
</style>
