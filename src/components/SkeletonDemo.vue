<template>
  <section id="#skeleton">
    <sd-container full>
      <section-header
        title="Skeleton Loader"
        sub-title="Spooky loaders"
        hash="#skeleton"
        git="https://github.com/strizich/sdui-vite/blob/master/src/lib/components/SdLoader/SdSkeleton.vue"
      />
      <sd-grid>
        <sd-cell :lg="3" :md="3" :sm="6" :xs="6">
          <sd-sheet theme="secondary" padded>
            <h3>
              <sd-skeleton :height="24"/>
            </h3>
            <p>
              <sd-skeleton />
              <sd-skeleton />
            </p>
          </sd-sheet>
        </sd-cell>
        <sd-cell :lg="3" :md="3" :sm="6" :xs="6">
          <sd-sheet theme="success" padded>
            <sd-skeleton :height="250" :min-width="100"/>
            <p>
              <sd-skeleton />
              <sd-skeleton />
            </p>
          </sd-sheet>
        </sd-cell>
      </sd-grid>
    </sd-container>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  components: { SectionHeader }
}
</script>

<style lang="scss" scoped>

</style>
