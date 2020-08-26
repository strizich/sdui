<template>
  <!-- Should maybe rename this component... -->
  <div :class="['sd--field__group', classes]">
    <legend class="sd--field__legend">
      <span>
        {{title}}
        <!-- Likely better to put this into a named slot so that the components are more composable -->
        <sd-tooltip v-if="tip" theme="default" :placement="tipPlacement">{{tip}}</sd-tooltip>
      </span>
    </legend>
    <div :class="['sd--field__content', childClasses]">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import SdTooltip from '@/library/components/SdTooltip'

export default defineComponent({
  components: { SdTooltip },
  props: {
    title: String,
    stack: Boolean,
    inlineLabel: Boolean,
    tip: String,
    tipPlacement: {
      type: String,
      default: 'top'
    }
  },
  setup (props) {
    const classes = computed(() => {
      return {
        'sd--field__group--inline': props.inlineLabel,
        'sd--field__group--stacked': props.stack
      }
    })
    const childClasses = computed(() => {
      return {
        'is--stacked': props.stack
      }
    })
    return { classes, childClasses }
  }
})
</script>

<style lang="scss">
.sd--field{
  &__group{
    padding: 0 0 16px 0;
    display:flex;
    flex-direction: column;
    label{
      display:block;
    }
    &:only-child{
      padding:0;
    }
    &--inline{
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      legend{
        width: auto;
        margin-top: 8px;
        margin-right: 16px;
        flex-shrink: 0;
      }
    }
    &--inline{
      align-items: flex-start;
    }
  }
  &__content{
    display:flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    .sd--checkbox{
      margin-left:0;
      margin-right: 0;
    }
    .sd--radio{
      margin-bottom:0;
    }
    .sd--button{
      margin: 0 4px;
    }
    &.is{
      &--stacked{
        flex-direction: column;
        width:100%;
        align-content: flex-start;
        .sd--button{
          margin: 4px;
        }
      }
    }
  }
}
</style>
