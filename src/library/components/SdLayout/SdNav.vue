<template>
  <ul class="sd--nav">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'SdNav',
  setup (props, { slots }) {

  }
}
</script>

<style lang="scss">

  .sd--nav{
    list-style-type: none;
    margin: 0;
    padding: 0;
    &__list-item {
      margin:0;
      padding:0;
    }
    &__item{
      display:block;
      padding: 8px;
      display:flex;
      align-items: center;
      & > span {
        margin-left: 8px;
      }
      // &--active{
      // Things go here for active state.
      // }
      &--exact-active{
        color: #fff;
        background-color: var(--primary)
      }
    }
  }
</style>
