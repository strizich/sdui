<template>
  <div class="demo-slider">
  <sd-container>
    <sd-fieldset>
      <sd-field label="Set Label" type="text" v-model="label"/>
      <sd-field label="Set step" type="number" v-model.number="step"/>
      <sd-field label="Set value" type="number" v-model.number="value"/>
    </sd-fieldset>
    <sd-fieldset title="WIP">
      <sd-field label="Set min" type="number" v-model.number="min"/>
      <sd-field label="Set max" type="number" v-model.number="max"/>
    </sd-fieldset>
    <div class="demo-slider__wrapper">
      <sd-slider :label="label" :min="min" :max="max" :step="step" v-model:value="value"/>
    </div>
  </sd-container>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SdSlider from '@/library/components/SdSlider/SdSlider'
import { SdContainer, SdField, SdFieldset } from '@/library'

export default defineComponent({
  components: { SdSlider, SdContainer, SdField, SdFieldset },
  setup () {
    const slider = reactive({
      label: 'Label',
      min: 10,
      step: 1,
      max: 100,
      value: 50
    })

    return {
      ...toRefs(slider)
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-slider {
  margin-top: 32px;
  &__wrapper {
    margin-top: 32px;
    width: 75%;
    @include breakpoint-down('sm') {
      width: 100%;
    }
  }
}
</style>
