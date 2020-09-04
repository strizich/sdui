<template>
  <section>
    <h1>Input</h1>
    <sd-field
      label="Text Input"
      v-model="inputOne"
    />
    {{inputOne}}
    <sd-field
      label="Error as a boolean"
      v-model="inputTwo"
      pristine-error
      error
    />
    {{inputTwo}}
    <sd-field
      placeholder="1 + 1 = ?"
      label="Validate on change"
      type="number"
      v-model="inputThree"
      :error="validateMuth"
    />
    {{validateMuth}}
    {{inputThree === '2'}}
    {{inputThree === 2}}
    {{typeof inputThree}}
    <sd-field
      label="Error as a String"
      v-model="inputFour"
      pristine-error
      error="This is message"
    />
    {{inputFour}}
    <sd-field v-model="inputFive">
      <template v-slot:header>
        custom content slot
      </template>
      <template v-slot:footer>
        custom content slot
      </template>
    </sd-field>
    {{inputFive}}
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { SdField } from '@/library'
export default {
  name: 'InputDemo',
  components: { SdField },
  setup () {
    const state = reactive({
      inputOne: '',
      inputTwo: '',
      inputThree: null,
      inputFour: '',
      inputFive: ''
    })
    const aNumber = computed(() => {
      return parseInt(state.inputThree)
    })

    const validateMuth = computed(() => {
      // input is always going to emit a string
      return aNumber.value !== 2 ? 'not 2' : false
    })

    return { ...toRefs(state), validateMuth, aNumber }
  }
}
</script>

<style lang="scss" scoped>

</style>
