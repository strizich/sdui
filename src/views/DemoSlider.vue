<template>
  <div>
    <sd-field type="number" v-model.number="sliderOne"/>
    <sd-slider :step="100" :min="1" :max="1000" v-model:value="sliderOne"/>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SdSlider from '@/library/components/SdSlider/SdSlider'
import { SdField } from '@/library'

export default defineComponent({
  components: { SdSlider, SdField },
  setup () {
    const state = reactive({
      sliderOne: 10
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
