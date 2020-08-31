<template>
  <section>
    <h2>Cards</h2>
    <div class="cards__content">
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

      <sd-card>
        <sd-card-header>Generic Card</sd-card-header>
        <sd-card-body>Generic Body Content <sd-hamburger/> <sd-mouse/></sd-card-body>
        <sd-card-footer align="flex-end">
          <sd-button flat theme="default">Button</sd-button>
          <sd-button flat>Button</sd-button>
        </sd-card-footer>
      </sd-card>
    </div>
  </section>
</template>

<script>
import {
  SdHamburger,
  SdButton,
  SdCard,
  SdCardHeader,
  SdCardBody,
  SdCardFooter,
  SdCardMedia,
  SdMouse
} from '@/library'

export default {
  name: 'CardTest',
  components: { SdMouse, SdHamburger, SdButton, SdCard, SdCardHeader, SdCardBody, SdCardFooter, SdCardMedia }
}
</script>

<style lang="scss" scoped>
  .cards__content{
    display:flex;
    width: 100%;
    @include breakpoint-down('sm'){
      flex-direction: column;
    }
    & > .sd--card{
      @include breakpoint-down('sm'){
        margin: 0 0 32px;
      }
      width: 100%;
      margin: 0 16px 16px;
      &:first-child{
        margin-left: 0;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
</style>
