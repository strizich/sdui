<template>
  <section>
      <sd-container>
        <section-header
          title="Cards"
          sub-title="Not at all like trading cards."
          hash="#cards"
        />
        <sd-row>
          <sd-col :sm="6" :md="4">
            <sd-card>
              <sd-card-header>Card Media</sd-card-header>
              <sd-card-media ratio="16x9">
                <img src="/img/Dispatching.png" alt="place-puppy.com"/>
              </sd-card-media>
              <sd-card-footer align="center">
                <sd-button flat theme="default">Button</sd-button>
                <sd-button flat>Button</sd-button>
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
                <sd-button flat theme="default">Button</sd-button>
                <sd-button flat>Button</sd-button>
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
                <sd-button flat theme="default">Button</sd-button>
                <sd-button flat>Button</sd-button>
              </sd-card-footer>
            </sd-card>
          </sd-col>
          <sd-col :sm="6" :md="8">
            <sd-card>
              <sd-card-header>Generic Card</sd-card-header>
              <sd-card-body>
                Content here
              </sd-card-body>
            </sd-card>
          </sd-col>
        </sd-row>
      </sd-container>
  </section>
</template>

<script>
import {
  SdButton,
  SdCard,
  SdCardHeader,
  SdCardFooter,
  SdCardBody,
  SdCardMedia,
  SdContainer,
  SdRow,
  SdCol
} from '@/library'
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'CardTest',
  components: {
    SdButton,
    SdCard,
    SdCardHeader,
    SdCardBody,
    SdCardFooter,
    SdCardMedia,
    SdContainer,
    SdRow,
    SdCol,
    SectionHeader
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
