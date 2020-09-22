<template>
  <div class="demo">
    <div class="demo__item">
    <section-header title="Chips" sub-title="Smallish thing" hash="#chips"/>
    <sd-chip label="chips here" v-model="state.chipsArray" placeholder="placeholder"/>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { reactive } from 'vue'
import { SdChip } from '@/library'

export default {
  components: {
    SdChip,
    SectionHeader
  },
  setup () {
    const state = reactive({
      chipsArray: ['one', 'two', 'three']
    })
    return { state }
  }

}
</script>

<style lang="scss" scoped>
@import '../library/scss/mixins';
.demo__item{
  width: 50%;
  @include breakpoint-down('sm') {
    width: 100%;
  }
}
</style>
