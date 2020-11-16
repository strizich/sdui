<template>
  <section>
      <sd-container>
        <section-header
          title="Charts"
          sub-title="Lines go up. Lines go down."
          placement="bottom"
          git="https://github.com/strizich/sdui/tree/master/src/library/components/SdChart"
        />
        <sd-row>
          <sd-col :sm="12" :md="6" v-for="(data, index) in data.chartData" :key="index">
            <sd-card>
              <sd-card-header>{{data.title}}</sd-card-header>
              <sd-card-body>
                <sd-base-chart :chart-data="data"/>
              </sd-card-body>
            </sd-card>
          </sd-col>
        </sd-row>
      </sd-container>
  </section>
</template>

<script>
import { reactive, defineAsyncComponent } from 'vue'
import SectionHeader from '@/components/SectionHeader'
import mockChartData from '@/assets/chartData'

const SdBaseChart = defineAsyncComponent(
  () => import('@/library/components/SdChart/SdBaseChart')
)

export default {
  name: 'CardTest',
  components: {
    SectionHeader,
    SdBaseChart
  },
  setup () {
    const data = reactive({
      chartData: mockChartData
    })
    return { data }
  }
}
</script>

<style lang="scss" scoped>
  .sd--card{
    align-self: stretch;
    @include breakpoint-down('sm') {
      margin-bottom: 30px;
      height: inherit;
    }
  }
</style>
