<template>
  <section>
    <sd-container full>
      <h1>Input</h1>
      <sd-row>
        <sd-col :md="6">
          <input class="rm--range" type="range" min="1" max="3" v-model="inputThree"/>
        </sd-col>
        <sd-col :md="6">
          <sd-range label="thing" v-model="inputThree"/>
        </sd-col>
      </sd-row>

      <sd-row>
        <sd-col :md="4">
          <sd-field
            label="Text Input"
            v-model="inputOne"
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field
            label="Error as a boolean"
            v-model="inputTwo"
            pristine-error
            error
          />
        </sd-col>
        <sd-col :md="4">
          <sd-field
            label="1 + 1 = ?"
            type="number"
            v-model="inputThree"
            :error="validateMuth"
            pristine-error
          />
        </sd-col>
      </sd-row>

      <sd-row>
        <sd-col :md="4">
          <sd-field
            label="Error as a String"
            v-model="inputFour"
            pristine-error
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
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { SdField, SdRange, SdRow, SdContainer, SdCol } from '@/library'
export default {
  name: 'InputDemo',
  components: { SdField, SdRange, SdRow, SdCol, SdContainer },
  setup () {
    const state = reactive({
      inputOne: '',
      inputTwo: '',
      inputThree: 2,
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
