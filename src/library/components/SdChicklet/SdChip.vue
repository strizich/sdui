<template>
  <div class="sd--chip">
    <sd-field
      :label="label"
      ref="inputRef"
      @keyup.enter="handleEnter"
      @keydown.delete="handleBackspace"
      v-model="state.inputVal"
      :error="error"
      :placeholder="placeholder"
    >
    <template #addon>
      <transition-group name="fade">
        <sd-chicklet
          :theme="state.duplicatedChip === chip ? 'danger' : 'primary'"
          @click="removeChip(chip)"
          dismissable
           v-for="(chip, index) in state.chipList"
          :key="index"
        >
          {{chip}}
        </sd-chicklet>
      </transition-group>
    </template>
    </sd-field>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, watch, ref } from 'vue'
import { SdChicklet, SdField } from '@/library'

export default defineComponent({
  name: 'Home',
  components: { SdChicklet, SdField },
  props: {
    label: String,
    placeholder: String,
    error: [Boolean, String],
    checkDuplicated: {
      type: Boolean,
      default: true
    },
    modelValue: Array
  },
  emits: ['update:modelValue', 'delete', 'inset'],
  setup (props, { emit }) {
    const inputRef = ref(null)

    const state = reactive({
      inputVal: '',
      chipList: [],
      duplicatedChip: null
    })

    const handleEnter = (e) => {
      if (!state.duplicatedChip && state.inputVal) {
        state.chipList.push(state.inputVal)
        state.inputVal = ''
        emit('update:modelValue', state.chipList)
        emit('inset', state.chipList)
      }
    }

    const removeChip = (chip) => {
      const index = props.modelValue.indexOf(chip)
      state.chipList.splice(index, 1)
      emit('update:modelValue', state.chipList)
      emit('delete', chip, index)
      // nextTick(() => inputRef.value.input.focus())
    }

    const formattedInputVal = computed(() => {
      console.log('formatted')
      return state.inputVal
    })

    const checkDuplicate = () => {
      if (!state.chipList.includes(formattedInputVal.value)) {
        console.log('dupe null')
        state.duplicatedChip = null
        return false
      }
      if (!props.checkDuplicated) {
        console.log('props dupe false')
        return false
      }
      console.log(formattedInputVal.value)
      state.duplicatedChip = formattedInputVal.value
    }

    const handleBackspace = () => {
      if (!state.inputVal) {
        removeChip(state.chipList[props.modelValue.length - 1])
      }
    }

    watch(() => state.inputVal, () => {
      console.log('yo')
      checkDuplicate()
    })

    return { state, handleEnter, handleBackspace, removeChip, inputRef, checkDuplicate }
  }
})
</script>

<style lang="scss">
.sd--chip{
  margin: 0 auto;
  .sd--field{
    position: relative;
    &__control{
      &:after{
        font-family: 'Material Icons';
        font-feature-settings: 'liga';
        pointer-events: none;
        content: 'keyboard_return';
        position: absolute;
        right: 4px;
        bottom: 35px;
        padding: 2px 4px;
        display:block;
        color: var(--text-accent);
        background-color:var(--background);
        border-radius: 3px;
        margin-top: -24px;
      }
    }
  }
}
.sd--chicklet{
  margin-right: 8px;
  opacity: 1;
  transition: background-color .23s ease-in-out, opacity .23s ease-in-out;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .23s ease-in-out, transform .23s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(.9);

}
.fade-enter-to, .fade-leave-from{
  opacity:1;
  transform: scale(1);
}
</style>
