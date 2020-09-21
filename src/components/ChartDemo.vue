<template>
  <section>
      <sd-container>
        <section-header
          title="Charts"
          sub-title="Not at all like trading cards."
          placement="bottom"
        />
        <sd-row>
          <sd-col :sm="6" :md="6" v-for="(data, index) in data.chartData" :key="index">
            <sd-card>
              <sd-card-header>Generic Card</sd-card-header>
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
import { reactive } from 'vue'
import {
  SdCard,
  SdCardHeader,
  SdCardBody,
  SdContainer,
  SdRow,
  SdCol
} from '@/library'
import SdBaseChart from '@/library/components/SdChart/SdBaseChart'
import SectionHeader from '@/components/SectionHeader'
import mockChartData from '@/assets/chartData'

export default {
  name: 'CardTest',
  components: {
    SdCard,
    SdCardHeader,
    SdCardBody,
    SdContainer,
    SdRow,
    SdCol,
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
