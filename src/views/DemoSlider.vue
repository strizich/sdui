<template>
  <div class="demo-slider">
  <sd-container>
    <sd-fieldset>
      <sd-field label="Set Label" type="text" v-model="label"/>
      <sd-field label="Set step" type="number" v-model.number="step"/>
      <sd-field label="Set value" type="number" v-model.number="value1"/>
    </sd-fieldset>
    <sd-fieldset>
      <sd-field label="Set min" type="number" v-model.number="min"/>
      <sd-field label="Set max" type="number" v-model.number="max"/>
    </sd-fieldset>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-tooltip
        show-indicators
        :label="label"
        :min="min"
        :max="max"
        :step="step"
        v-model:value="value1"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-tooltip
        label="Slider with tooltip"
        v-model:value="value2"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        label="Slider with min/max"
        show-indicators
        v-model:value="value3"
      />
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
      step: 1,
      min: 10,
      max: 100,
      value1: 25,
      value2: 50,
      value3: 75
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
