<template>
  <div class="sd--range">
    <sd-label v-if="label">{{label}}</sd-label>
    <input class="sd--range__control" type="range" @input="(e) => handleInput(e)" />
  </div>
</template>

<script>
import SdLabel from './SdLabel'

export default {
  components: {
    SdLabel
  },
  props: {
    min: [String, Number],
    max: [String, Number],
    step: [String, Number],
    modelValue: {
      type: [String, Number]
    },
    label: String
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const handleInput = (event) => {
      emit('update:modelValue', event.target.value)
    }
    return { handleInput }
  }
}
</script>

<style lang="scss" scoped>
  .sd--range{
    &__control{
      background:var(--background-accent);
      appearance: none;
      &::-webkit-slider-thumb{
        background: var(--primary);
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 30px;
        transition: transform .23s ease-in-out;
      &:hover{
          transform: scale(1.2);
        }
        &:active{
          transform: scale(1.1);
        }
      }
    }
  }
</style>
