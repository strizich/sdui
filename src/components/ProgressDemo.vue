<template>
  <section id="#progress">
    <sd-container full>
      <section-header
      title="Progress Bars"
      sub-title="Some clever tagline"
      placement="bottom"
      hash="#progress"
      progress="https://github.com/strizich/sdui-vite/blob/master/src/lib/components/SdProgress/SdProgress.vue"
      />
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
    </sd-container>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  setup () {
    const bars = [{
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
      label: 'Default Theme',
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
      progress: 0.43333,
      animated: false
    }]

    return { bars }
  },
  components: {
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
