<template>
  <section>
    <sd-container full>
      <section-header hash="#controls" title="Form Controls" sub-title="What goes in. Comes back out?" placement="bottom"/>
      <sd-row>
        <sd-col :md="4">
          <sd-field
            label="Text Input One"
            v-model="inputOne"
            required
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field
            label="Error as a boolean"
            pristine-error
            error
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field
            label="Manual Binding"
            @input="(e) => inputSixEvent(e)"
            :value="inputSix"
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field
            label="1 + 1 = ?"
            type="number"
            v-model.number="inputThree"
            pristine-error
            :error="validateMuth"
          />
        </sd-col>
      </sd-row>

      <sd-row>
        <sd-col :md="4">
          <sd-field
            label="Error as a String"
            v-model="inputFour"
            required
            error="This is message"
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field v-model="inputFive">
            <template v-slot:header>
              custom content slot
            </template>
            <template v-slot:footer>
              custom content slot
            </template>
          </sd-field>
        </sd-col>
      </sd-row>
    </sd-container>
  {{state}}
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default {
  name: 'InputDemo',
  components: { SectionHeader },
  setup () {
    const state = reactive({
      inputOne: '',
      inputTwo: '',
      inputThree: 2,
      inputFour: '',
      inputFive: '',
      inputNum: 3,
      inputSix: 'oiu'
    })

    const aNumber = computed(() => {
      return parseInt(state.inputThree)
    })

    const validateMuth = computed(() => {
      // input is always going to emit a string
      return aNumber.value !== 2 ? 'not 2' : false
    })

    const inputSixEvent = (event) => {
      state.inputSix = event.target.value
    }

    return { ...toRefs(state), validateMuth, aNumber, inputSixEvent, state }
  }
}
</script>

<style lang="scss" scoped>
  .rm--range{
    background:var(--background-accent);
    appearance: none;
    &::-webkit-slider-thumb{
      background: green;
      color: green;
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
</style>
