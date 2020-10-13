<template>
  <sd-container>
    <sd-slider
      label="Elevation"
      :min="1"
      :max="24"
      show-indicators
      show-tooltip
      show-ticks
      v-model:value="state.elevation"
    />
    <div :class="['elevation__item', computedClass]">
      {{computedClass}}
    </div>
    <!-- <sd-row>
      <sd-col :lg="2" :md="4" v-for="n of 24" :key="n">
        <div :class="['elevation__item', makeElevationClass(n)]">
          <span>{{n}}</span>
          <small>{{makeElevationClass(n)}}</small>
        </div>
      </sd-col>
    </sd-row> -->
  </sd-container>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
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
