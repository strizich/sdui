<template>
  <sd-container full>
    <section-header
      title="Slider"
      sub-title="woooooo"
      placement="bottom"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdSlider"
    />
    <sd-grid>
      <sd-cell :md="6">
        <sd-checkbox v-model="showOptions">Additional Settings</sd-checkbox>
      </sd-cell>
    </sd-grid>
    <sd-grid v-if="showOptions">
      <sd-cell :xs="6" :sm="6" :md="6">
        <sd-fieldset stack>
          <sd-field label="Set Label" type="text" v-model="label"/>
          <sd-field label="Set Step" type="number" v-model.number="step"/>
          <sd-field label="Set Value" type="number" v-model.number="value1"/>
        </sd-fieldset>
      </sd-cell>
      <sd-cell :xs="6" :sm="6" :md="6">
        <sd-fieldset stack>
          <sd-field label="Set Min" type="number" v-model.number="min"/>
          <sd-field label="Set Max" type="number" v-model.number="max"/>
        </sd-fieldset>
      </sd-cell>
    </sd-grid>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-tooltip
        show-indicators
        :label="label"
        :min="min"
        :max="max"
        :step="step"
        v-model="value1"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-tooltip
        :step="4"
        :min="min"
        :max="max"
        label="Slider with tooltip and tick marks"
        v-model="value2"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        label="Slider with min/max"
        show-indicators
        :min="min"
        :max="max"
        v-model="value3"
        :hint="`${value3} of ${max} Somethings`"
      />
    </div>
    <div class="demo-slider__wrapper">
      <sd-slider
        show-indicators
        :min="min"
        :max="max"
        v-model="value4"
      >
        <template #label>
          <sd-label>Woooo! Slot.</sd-label>
        </template>
        <template #hint>
          <small class="sd--text__footnote">
            Custom <strong>{{value4}}</strong> of <strong>{{max}}</strong> thingies.
          </small>
        </template>
      </sd-slider>
    </div>
  </sd-container>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SectionHeader from '@/components/SectionHeader'

export default defineComponent({
  components: { SectionHeader },
  setup () {
    const slider = reactive({
      label: 'Label',
      step: 4,
      min: 8,
      max: 32,
      value1: 8,
      value2: 16,
      value3: 24,
      value4: 32,
      showOptions: false,
      showTicks: false
    })

    return {
      ...toRefs(slider)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/node_modules/@strizich/sdui/dist/scss/breakpoints';
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
