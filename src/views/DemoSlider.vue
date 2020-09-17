<template>
  <div class="demo-slider">
  <sd-container>
    <section-header title="Slider" sub-title="woooooo" placement="bottom"/>
    <sd-row>
      <sd-col :md="6">
        <sd-checkbox v-model="showOptions">Additional Settings</sd-checkbox>
      </sd-col>
    </sd-row>
    <sd-row v-if="showOptions">
      <sd-col :xs="6" :sm="6" :md="6">
        <sd-fieldset stack>
          <sd-field label="Set Label" type="text" v-model="label"/>
          <sd-field label="Set Step" type="number" v-model.number="step"/>
          <sd-field label="Set Value" type="number" v-model.number="value1"/>
        </sd-fieldset>
      </sd-col>
      <sd-col :xs="6" :sm="6" :md="6">
        <sd-fieldset stack>
          <sd-field label="Set Min" type="number" v-model.number="min"/>
          <sd-field label="Set Max" type="number" v-model.number="max"/>
        </sd-fieldset>
      </sd-col>
    </sd-row>
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
        :hint="`${value3} of ${max} Somethings`"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-indicators
        v-model:value="value3 "
      >
        <template #label>
          <sd-label>Woooo! I am such a slot.</sd-label>
        </template>
        <template #hint>
          <small class="sd--text__footnote">
            Custom <strong>{{value3}}</strong> of <strong>{{max}}</strong> thingies.
          </small>
        </template>
      </sd-slider>
    </div>
  </sd-container>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SdSlider from '@/library/components/SdSlider/SdSlider'
import SectionHeader from '@/components/SectionHeader'
import { SdContainer, SdField, SdFieldset, SdLabel, SdCol, SdRow, SdCheckbox } from '@/library'

export default defineComponent({
  components: { SdSlider, SdContainer, SdField, SdFieldset, SectionHeader, SdLabel, SdCol, SdRow, SdCheckbox },
  setup () {
    const slider = reactive({
      label: 'Label',
      step: 1,
      min: 10,
      max: 100,
      value1: 25,
      value2: 50,
      value3: 75,
      showOptions: false
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
  margin-bottom: 64px;
  &__wrapper {
    margin-top: 32px;
    width: 75%;
    @include breakpoint-down('sm') {
      width: 100%;
    }
  }
}
</style>
