<template>
  <div class="demo">
    <section-header title="Chip Field" sub-title="Smallish thing" hash="#chips"/>
    <div class="demo__item">
      <!-- TODO: snake, camel, and kebab casing options for output -->
      <!-- TODO: error handling -->
      <sd-chip
        label="Dynamic Chips (success theme)"
        theme="success"
        v-model="state.chipsArrayOne"
        placeholder="press enter to add"
      />
      <code>{{state.chipsArrayOne}}</code>
      <hr class="sd--divider"/>
      <sd-chip
        label="Chicklets are captialized"
        v-model="state.chipsArrayFour"
        theme="warning"
        captialize
        placeholder="press enter to add"
      />
      <code>{{state.chipsArrayFour}}</code>
      <hr class="sd--divider"/>

      <sd-chip
        label="Chicklets are uppercase"
        v-model="state.chipsArrayTwo"
        uppercase
        placeholder="placeholder"
      />
      <code>{{state.chipsArrayTwo}}</code>
      <hr class="sd--divider"/>

      <sd-chip
        label="Chicklets are lowercase"
        v-model="state.chipsArrayThree"
        lowercase
        placeholder="placeholder"
      />
      <code>{{state.chipsArrayThree}}</code>
      <hr class="sd--divider"/>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { reactive, watch } from 'vue'

export default {
  components: {
    SectionHeader
  },
  setup () {
    const state = reactive({
      chipsArrayOne: ['hey', 'you', 'guys'],
      chipsArrayTwo: [],
      chipsArrayThree: [],
      chipsArrayFour: [],
      setting: 'none'
    })

    watch(() => state.setting, (newValue) => {
      if (newValue) {
        state.chipsArray = []
      }
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
