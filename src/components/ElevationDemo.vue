<template>
  <div class="elevation">
    <sd-container full>
      <section-header hash="#elevation" title="Elevation" sub-title="Feeling a bit light headed."/>
      <sd-row>
        <sd-col :lg="2" :md="4" v-for="n of 24" :key="n">
          <div :class="['elevation__item', makeElevationClass(n)]">
            <span>{{n}}</span>
            <small>{{makeElevationClass(n)}}</small>
          </div>
        </sd-col>
      </sd-row>
    </sd-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default defineComponent({
  components: { SectionHeader },
  setup () {
    // Future: Make demo dynamic... Likely after SdRange is finished.
    // const elevation = ref(0)
    // const computeElevation = computed(() => {
    //   return makeElevationClass(elevation.value)
    // })
    const makeElevationClass = (elevation) => {
      return `elevation--${elevation}`
    }
    return {
      makeElevationClass
      // computeElevation,
      // elevation
    }
  }
})
</script>

<style lang="scss" scoped>
.elevation{
  margin-bottom: 32px;
  &__item{
    height: 100px;
    display:flex;
    width:100%;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom: 32px;
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
