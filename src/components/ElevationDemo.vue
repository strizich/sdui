<template>
  <sd-container full>
    <section-header
      title="Elevation"
      sub-title="Feeling a bit light headed."
      hash="#elevation"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdElevation"
    />
    <sd-slider
      label="Elevation"
      :min="1"
      :max="24"
      show-indicators
      show-tooltip
      show-ticks
      v-model="state.elevation"
    />
    <div :class="['elevation__item', computedClass]">
      {{computedClass}}
    </div>
  </sd-container>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'ElevationDemo',
  components: { SectionHeader },
  setup () {
    const state = reactive({
      elevation: 12
    })
    const makeElevationClass = (elevation) => {
      return `elevation--${elevation}`
    }
    const computedClass = computed(() => {
      return `elevation--${state.elevation}`
    })
    return {
      makeElevationClass,
      computedClass,
      state
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/node_modules/@strizich/sdui/dist/scss/breakpoints';
.elevation{
  margin-bottom: 32px;
  &__item{
    height: 100px;
    margin-top: 40px;
    display:flex;
    width:100%;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom: 32px;
    height: 240px;
    @include breakpoint-down('sm') {
      width: 100%;
    }
    & > span{
      font-weight: 700;
      font-size: 24px;
      display:block;
      margin-bottom: 8px;
    }
  }
}
</style>
