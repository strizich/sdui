<template>
  <sd-card class="widget">
    <sd-card-header :title="title"/>
    <sd-card-media ratio="16x9" v-if="image">
      <img :src="image" :alt="title" />
    </sd-card-media>
    <sd-card-body>
      <slot/>
    </sd-card-body>
  </sd-card>
</template>

<script>
export default {
  name: 'ChartDemo',
  props: {
    title: String,
    image: String
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
