<template>
  <section>
    <sd-container full>
      <section-header
        title="Cards"
        sub-title="Not at all like trading cards."
        hash="#cards"
        git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdCard"
      />
      <sd-grid align-items="stretch">
        <sd-cell :md="6">
          <sd-card>
            <sd-card-header title="Card Media" subtitle="Subtitles are here" />
            <sd-card-media ratio="16x9">
              <img src="/img/Dispatching.png" alt="place-puppy.com" />
            </sd-card-media>
            <sd-card-footer align="center">
              <sd-button flat theme="default" size="sm">Button</sd-button>
              <sd-button flat size="sm">Button</sd-button>
            </sd-card-footer>
          </sd-card>
        </sd-cell>
        <sd-cell :md="6">
          <sd-card>
            <sd-card-header title="Card 2" subtitle="Subtitles are here" />
            <sd-card-body>
              <p>Stuff goes in here</p>
            </sd-card-body>
            <sd-card-footer align="flex-end">
              <sd-button flat theme="default" size="sm">Button</sd-button>
              <sd-button flat size="sm">Button</sd-button>
            </sd-card-footer>
          </sd-card>
        </sd-cell>
        <sd-cell :md="6">
          <sd-card>
            <sd-card-media ratio="16x9">
              <img src="/img/StyleGuide.png" alt="place-puppy.com" />
            </sd-card-media>
            <sd-card-header title="Composable!" subtitle="Yay!" />
            <sd-card-footer align="flex-end">
              <sd-button flat theme="default" size="sm">Button</sd-button>
              <sd-button flat size="sm">Button</sd-button>
            </sd-card-footer>
          </sd-card>
        </sd-cell>
      </sd-grid>
    </sd-container>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'CardTest',
  components: {
    SectionHeader
  },
  setup () {}
}
</script>

<style lang="scss" scoped>
</style>
