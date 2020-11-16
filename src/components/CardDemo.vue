<template>
  <section>
      <sd-container>
        <section-header
          title="Cards"
          sub-title="Not at all like trading cards."
          hash="#cards"
          git="https://github.com/strizich/sdui/tree/master/src/library/components/SdCard"
        />
        <sd-row>
          <sd-col :sm="6" :md="4">
            <sd-card>
              <sd-card-header>Card Media</sd-card-header>
              <sd-card-media ratio="16x9">
                <img src="/img/Dispatching.png" alt="place-puppy.com"/>
              </sd-card-media>
              <sd-card-footer align="center">
                <sd-button flat theme="default" size="sm">Button</sd-button>
                <sd-button flat size="sm">Button</sd-button>
              </sd-card-footer>
            </sd-card>
          </sd-col>
          <sd-col :sm="6" :md="4">
            <sd-card>
              <sd-card-header>Generic Card</sd-card-header>
              <sd-card-media ratio="16x9">
                <img src="/img/Reservations.png" alt="place-puppy.com"/>
              </sd-card-media>
              <sd-card-footer align="flex-end">
                <sd-button flat theme="default" size="sm">Button</sd-button>
                <sd-button flat size="sm">Button</sd-button>
              </sd-card-footer>
            </sd-card>
          </sd-col>
          <sd-col :sm="6" :md="4">
            <sd-card>
              <sd-card-header>Generic Card</sd-card-header>
              <sd-card-media ratio="16x9">
                <img src="/img/StyleGuide.png" alt="place-puppy.com"/>
              </sd-card-media>
              <sd-card-footer align="flex-end">
                <sd-button flat theme="default" size="sm">Button</sd-button>
                <sd-button flat size="sm">Button</sd-button>
              </sd-card-footer>
            </sd-card>
          </sd-col>
        </sd-row>
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
  setup () {

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
