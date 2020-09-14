<template>
  <div>
    <sd-slider :min="0" :max="100" v-model="sliderOne" theme="primary"/>

    <sd-slider :min="0" :max="100" v-model="sliderOne" theme="primary"/>

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SdSlider from '@/library/components/SdSlider/SdSlider'

export default defineComponent({
  components: { SdSlider },
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
