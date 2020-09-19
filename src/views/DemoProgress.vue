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
              :animated="bar.animated"
            />
            <code>title: {{bar.label}}<br/></code>
            <code>theme: {{bar.theme}}<br/></code>
            <code v-if="bar.hint">hint: {{bar.hint}}<br/></code>
            <code v-if="bar.progress">progress: {{bar.progress}}<br/></code>
            <code v-if="bar.total">total: {{bar.total}}<br/></code>
            <code v-if="bar.current">current: {{bar.current}}<br/></code>
            <code>animated: {{bar.animated}}<br/></code>
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
        current: 90,
        progress: null,
        animated: true
      }, {
        label: 'Secondary Theme',
        theme: 'secondary',
        total: 99,
        current: 80,
        progress: null,
        animated: false
      }, {
        label: 'Success Theme',
        theme: 'default',
        total: null,
        current: null,
        progress: 0.7,
        animated: true
      }, {
        label: 'Danger Theme',
        theme: 'danger',
        total: null,
        current: null,
        progress: 0.605,
        animated: true
      }, {
        label: 'Success Theme',
        theme: 'success',
        total: null,
        current: null,
        progress: 0.5,
        animated: false
      }, {
        label: 'Warning Theme',
        theme: 'warning',
        total: null,
        current: null,
        progress: 0.33333,
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
