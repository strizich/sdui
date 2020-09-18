<template>
  <sd-card class="widget">
    <sd-card-header :title="title"/>
    <sd-card-footer>
      <slot/>
    </sd-card-footer>
    <sd-card-media ratio="16x9" v-if="image">
      <img :src="image" :alt="title" />
    </sd-card-media>
  </sd-card>
</template>

<script>
import { SdCard, SdCardHeader, SdCardMedia, SdCardFooter } from '@/library'
export default {
  props: {
    title: String,
    image: String
  },
  components: {
    SdCard,
    SdCardHeader,
    SdCardMedia,
    SdCardFooter
  }
}
</script>

<style lang="scss" scoped>
.widget{
  &:hover{
    cursor: pointer;
  }
}
</style>
