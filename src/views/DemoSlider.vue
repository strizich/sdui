<template>
  <div>
    <sd-container>
      <sd-row>
        <sd-col>
          <sd-field type="number" v-model.number="sliderOne"/>
        </sd-col>
      </sd-row>
    <sd-row>
      <sd-col :md="6">
        <sd-slider :step="1" :min="1" :max="100" v-model:value="sliderOne"/>
      </sd-col>
      <sd-col :md="6">
        <sd-slider :step="1" :min="1" :max="100" v-model:value="sliderOne"/>
      </sd-col>
    </sd-row>
    </sd-container>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SdSlider from '@/library/components/SdSlider/SdSlider'
import { SdField, SdContainer, SdRow, SdCol } from '@/library'

export default defineComponent({
  components: { SdSlider, SdField, SdContainer, SdRow, SdCol },
  setup () {
    const state = reactive({
      sliderOne: 100
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
