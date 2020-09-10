<template>
  <section>
      <sd-container full>
        <section-header
          title="Cards"
          sub-title="Not at all like trading cards."
          hash="#cards"
        />
        <sd-row>
          <sd-col :sm="12" :md="6">
            <sd-card>
              <sd-card-header>Card Media</sd-card-header>
              <sd-card-media ratio="16x9">
                <img src="http://place-puppy.com/400x400" alt="place-puppy.com"/>
              </sd-card-media>
              <sd-card-footer align="center">
                <sd-button flat theme="default">Button</sd-button>
                <sd-button flat>Button</sd-button>
              </sd-card-footer>
            </sd-card>
          </sd-col>
          <sd-col :sm="12" :md="6">
            <sd-card>
              <sd-card-header>Generic Card</sd-card-header>
              <sd-card-body>Generic Body Content <sd-mouse/></sd-card-body>
              <sd-card-footer align="flex-end">
                <sd-button flat theme="default">Button</sd-button>
                <sd-button flat>Button</sd-button>
              </sd-card-footer>
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
  SdCardBody,
  SdCardFooter,
  SdCardMedia,
  SdMouse,
  SdContainer,
  SdRow,
  SdCol
} from '@/library'
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'CardTest',
  components: {
    SdMouse,
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
    height: 100%;
    @include breakpoint-down('sm') {
      margin-bottom: 30px;
      height: inherit;
    }
  }
</style>
