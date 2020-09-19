<template>
  <div class="demo">
      <section-header title="Progress" sub-title="Some clever tagline" placement="bottom"/>
      <div class="demo__body">
        <template
          v-for="bar in bars"
          :key="bar.theme"
        >
          <div class="demo__bar">
            <sd-progress
              :title="bar.label"
              :theme="bar.theme"
              :hint="bar.hint"
              :progress="bar.progress"
              :total="bar.total"
              :current="bar.current"
            />
            <code>{{bar}}</code>
          </div>
        </template>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { SdProgress } from '@/library'
import SectionHeader from '@/components/SectionHeader'
export default {
  setup () {
    const state = reactive({
      bars: [{
        label: 'Primary Theme',
        theme: 'primary',
        hint: 'Aye a hint.',
        total: 100,
        current: 50,
        progress: null,
        animated: true
      }, {
        label: 'Secondary Theme',
        theme: 'secondary',
        total: 2345,
        current: 1233,
        progress: null,
        animated: false
      }, {
        label: 'Success Theme',
        theme: 'default',
        total: null,
        current: null,
        progress: 0.9,
        animated: true
      }, {
        label: 'Danger Theme',
        theme: 'danger',
        total: null,
        current: null,
        progress: 0.855,
        animated: true
      }, {
        label: 'Success Theme',
        theme: 'success',
        total: null,
        current: null,
        progress: 0.6,
        animated: false
      }, {
        label: 'Warning Theme',
        theme: 'warning',
        total: null,
        current: null,
        progress: 0.6,
        animated: false
      }]
    })
    return { ...toRefs(state) }
  },
  components: {
    SdProgress,
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
  .demo{
    margin: 32px;
    &__bar{
      margin-bottom: 64px;
    }
  }
</style>
