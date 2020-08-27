<template>
  <div class="elevation">
    <h1>Elevation System</h1>
    <div class="elevation__content">
      <div :class="['elevation__item', makeElevationClass(n)]" v-for="n of 24" :key="n">
        <span>{{n}}</span>
        <small>{{makeElevationClass(n)}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import '@/library/components/SdElevation'
export default defineComponent({
  setup () {
    // Future: Make demo dynamic... Likely after SdRange is finished.
    // const elevation = ref(0)
    // const computeElevation = computed(() => {
    //   return makeElevationClass(elevation.value)
    // })
    const makeElevationClass = (elevation) => {
      return `sd--elevation--${elevation}`
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
  width: 100%;
  margin-bottom: 32px;
  &__content{
    display:flex;
    flex-wrap: wrap;
    margin: 0 -16px;
    width: auto;
  }
  &__item{
    height: 100px;
    margin: 12px;
    min-width: 140px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    justify-content:center;
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
