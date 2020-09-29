<template>
    <div :class="[rootClasses]">
      <sd-label>{{label}}</sd-label>
      <slot name="header"/>
      <div :class="[inputClasses]">
        <slot name="addon"/>
        <input
          ref="inputRef"
          :id="id"
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :disabled="disabled"
          @blur="(e) => handleTouched(e)"
          @focus="(e) => handleFocused(e)"
          @input="(e) => handleInput(e)"
          :value="modelValue"
        />
      </div>
      <slot name="footer"/>
      <sd-error :message="handleValidation && isErrorString ? error : ''"/>
    </div>
</template>

<script>
import { defineComponent, reactive, computed, toRefs, watch, ref } from 'vue'
import SdUuid from '@/library/core/utilities/SdUuid'
import SdLabel from './SdLabel'
import SdError from './SdError'
export default defineComponent({
  emits: ['update:modelValue', 'focus', 'blur', 'change'],
  props: {
    modelValue: [String, Number],
    id: {
      type: String,
      default: () => 'sd--field--' + SdUuid()
    },
    modelModifiers: {
      default: () => ({})
    },
    label: String,
    name: String,
    value: [String, Number],
    setFocus: Boolean,
    placeholder: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: [Boolean, String]
    },
    // need a better name for this...
    pristineError: Boolean
  },

  setup (props, { emit }) {
    const inputRef = ref(null)

    const state = reactive({
      touched: false,
      focused: false
    })

    const handleValidation = computed(() => {
      if (props.pristineError) {
        return props.error
      }
      if (props.error === '') {
        return false
      }
      return state.touched && props.error
    })

    const isErrorString = computed(() => {
      return typeof props.error === 'string'
    })

    const handleInput = (e) => {
      let value = e.target.value
      if (props.modelModifiers.number || props.type === 'number') {
        value = parseInt(value)
      }
      emit('update:modelValue', value)
    }

    const handleTouched = (e) => {
      state.touched = true
      state.focused = false
      emit('blur', e)
    }

    const handleFocused = (e) => {
      state.focused = true
      emit('focus', e)
    }

    const rootClasses = computed(() => {
      return {
        'sd--field': true,
        'is--focused': state.focused
      }
    })

    const inputClasses = computed(() => {
      return {
        'sd--field__control': true,
        'is--dirty': state.touched,
        'is--error': handleValidation.value,
        'is--disabled': props.disabled
      }
    })

    watch(() => props.setFocus, () => {
      state.focused = props.setFocus
      if (props.setFocus) {
        inputRef.value.focus()
      }
    })

    return {
      ...toRefs(state),
      rootClasses,
      inputClasses,
      handleInput,
      handleTouched,
      handleFocused,
      isErrorString,
      handleValidation,
      inputRef
    }
  },
  components: {
    SdLabel,
    SdError
  }
})
</script>

<style lang="scss">
  @import "../SdElevation/mixins";
  .sd--field{
    padding-bottom: 24px;
    position: relative;
    width: 100%;
    &.is {
      &--focused {
        .sd--field__control{
          border-color: var(--primary-highlight);
          @include elevation(1);
        }
      }
    }
    &__body{
      display:flex;
      flex-wrap: wrap;
      align-items: center;
    }
    &__control {
      appearance: none;
      -webkit-appearance: none;
      color: var(--text);
      display:block;
      outline: none;
      border: 1px solid var(--divider);
      background: var(--background-highlight);
      border-radius: 3px;
      transition: all .3s ease-in-out;
      font-size: 16px;
      margin-bottom: 4px;
      width: 100%;
      display:flex;
      flex-wrap: wrap;
      align-items:center;
      @include elevation(3);
      &:disabled, &.is--disabled {
        opacity: .35;
        background-color: var(--background-accent);
        color: var(--text-highlight);
      }
      & > input{
        background:transparent;
        flex-grow: 2;
        outline: none;
        color: var(--text);
        font-size: 16px;
        border:none;
        padding: 8px;
        // padding: 4px 0;
        // margin: -4px 0;
      }
       &.is--error{
        border-color: var(--danger);
      }
    }

    & > span{
      display:block;
      margin-bottom: 4px;
    }

    & > input + span{
      margin-top: 8px;
    }
    .sd--error{
      position: absolute;
      bottom: 10px;
      left:0;
    }
  }
</style>
