<template>
  <section>
    <h2>Cards</h2>
    <div class="cards__content">
      <sd-card>
        <sd-card-header>Card Media</sd-card-header>
        <sd-card-media ratio="16x9">
          <img src="http://place-puppy.com/400x400" alt="place-puppy.com"/>
        </sd-card-media>
        <sd-card-body>Body</sd-card-body>
        <sd-card-footer align="flex-start">
          Some Footer Content
        </sd-card-footer>
      </sd-card>

      <sd-card>
        <sd-card-header>Generic Card</sd-card-header>
        <sd-card-body>Generic Body Content</sd-card-body>
        <sd-card-footer align="flex-end">
          <sd-button flat theme="default">Button</sd-button>
          <sd-button flat>Button</sd-button>
        </sd-card-footer>
      </sd-card>

    </div>
  </section>
</template>

<script>
import SdCard, {
  SdCardHeader,
  SdCardBody,
  SdCardFooter,
  SdCardMedia
} from '@/library/components/SdCard'
import SdButton from '@/library/components/SdButton'

export default {
  name: 'CardTest',
  components: { SdButton, SdCard, SdCardHeader, SdCardBody, SdCardFooter, SdCardMedia }
}
</script>

<style lang="scss" scoped>
  .cards__content{
    display:flex;
    width: 100%;
    .sd--card{
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
