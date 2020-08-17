<template>
 <!-- Simplified version of the checkbox -->
  <label :class="['sd--checkbox', classes]" @click.prevent="toggleCheck">
      <input
        type="checkbox"
        :id="id"
        :class="['sd--checkbox__field', checkClasses, animClasses]"
        :checked="isSelected"
        :indeterminate="indeterminate"
        v-bind="attributes"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span class="sd--checkbox__label"><slot/></span>
  </label>
</template>

<script>
import SdCheckboxMixin from './SdCheckboxMixin'
import sdUuid from '@/library/core/utilities/SdUuid'

export default {
  name: 'SdCheckboxOld',
  mixins: [SdCheckboxMixin],
  props: {
    id: {
      type: String,
      default: () => 'sd-checkbox--' + sdUuid()
    },
    rotateAnim: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes: function () {
      return {
        'is--disabled': this.disabled,
        'is--focused': this.hasFocus
      }
    },
    animClasses: function () {
      return {
        'is--rotated': this.rotateAnim
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $checkmarkSvgUri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8'%3E%3Cpath fill='%23FFF' fill-opacity='.9' d='M6.3984375,12.3046875 L3.13671875,9.0625 C3.04557282,8.97135407 3,8.85416657 3,8.7109375 C3,8.56770843 3.04557282,8.45052093 3.13671875,8.359375 L3.859375,7.65625 C3.95052093,7.55208343 4.06445312,7.5 4.20117188,7.5 C4.33789062,7.5 4.45833343,7.55208343 4.5625,7.65625 L6.75,9.84375 L11.4375,5.15625 C11.5416666,5.05208343 11.6621094,5 11.7988281,5 C11.9355469,5 12.0494791,5.05208343 12.140625,5.15625 L12.8632812,5.859375 C12.9544272,5.95052093 13,6.06770843 13,6.2109375 C13,6.35416657 12.9544272,6.47135407 12.8632812,6.5625 L7.1015625,12.3046875 C7.01041657,12.4088541 6.89322907,12.4609375 6.75,12.4609375 C6.60677093,12.4609375 6.48958343,12.4088541 6.3984375,12.3046875 Z' transform='translate(-3 -5)'/%3E%3C/svg%3E%0A";

  %checkbox{
    &:before{
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      left:0;
      top: 50%;
      margin-top: -10px;
      background-color: var(--background);
      box-shadow: inset 0 0 0 30px var(--background);
      display:block;
      transition: box-shadow .4s ease-in,
                  transform .2s ease-in,
                  background-color .4s ease-out,
                  border-color .2s ease-out;
      border: 2px solid var(--divider);
      border-radius: 2px;
    }
    &:focus-within, &:hover{
      &:before{
        border-color: var(--primary-accent);
      }
    }
    &.is--rotated {
      &:before{
        transform: rotateZ(-90deg);
      }
    }
  }
  %checked{
    &:before{
      box-shadow: inset 0 0 0 0 var(--background);
      border-color: var(--primary);
      background: url($checkmarkSvgUri) no-repeat center 2px;
      background-color: var(--primary);
      background-size: contain;
      transition: box-shadow .4s ease-out,
                  transform .2s ease-out,
                  background-color .4s ease-in;
    }
    &.is--rotated {
      &:before{
        transform: rotateZ(0deg);
      }
    }
  }
  %indeterminate{
    &:before{
      border:2px solid var(--background-accent);
      background: url(/img/icon-indeterminate.svg) var(--background-accent) no-repeat center center;
      box-shadow: inset 0 0 0 0px var(--background-accent);
      background-size: 8px;
    }
     &.is--rotated {
      &:before{
        transform: rotateZ(0deg);
      }
    }
  }
  %disabled{
    opacity: .65;
    cursor: not-allowed;
    color: var(--disabled);
  }

  .sd--checkbox {
    min-height: 34px;
    position:relative;
    padding: 8px 16px 8px 28px ;
    margin: 0 8px 8px 0;
    display: inline-flex;
    align-items: center;
    -webkit-user-select: none;
    &:first-of-type{
      margin-left:0;
    }
    &:hover{
      cursor: pointer;
      &:after{
        background-color: var(--background-highlight);
        content: '';
        position: absolute;
        top: 0;
        left: -8px;
        right: 0;
        bottom: 0;
        display:block;
        z-index: 0;
      }
    }
    &.is--disabled{
      @extend %disabled;
    }
    &.is--focused{
      color: var(--primary-highlight);
    }
    &__label{
      font-size: 16px;
      line-height: 1;
      display:block;
      z-index: 10;
    }
    &__field {
       appearance: none;
       width: 0;
       height: 0;
       border: none;
       @extend %checkbox;
      z-index: 10;
      &.is{
        &--checked{
          @extend %checked;
        }
        &--indeterminate{
          @extend %indeterminate;
        }
        &--disabled{
          @extend %disabled;
        }
      }
    }
  }
</style>
