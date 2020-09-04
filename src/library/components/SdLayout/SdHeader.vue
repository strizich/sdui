<template>
  <header class="sd--header">
    <div class="sd--header__container">
      <sd-hamburger :active="asideOpen" @toggled="handleMenu"/>
      <div class="sd--header__content">
        <div class="sd--header__brand">
          <slot name="brand" />
        </div>
        <nav class="sd--header__nav">
          <slot name="nav" />
        </nav>
      </div>
    </div>
    <div class="sd--header__subheader">
      <slot name="subheader"/>
    </div>
  </header>
</template>

<script>
import { SdHamburger } from '@/library'
// import { reactive } from 'vue'
export default {
  emits: ['toggle-aside'],
  components: { SdHamburger },
  props: {
    asideOpen: Boolean,
    drawerFloat: Boolean
  },
  setup (props, { emit }) {
    const handleMenu = (e) => {
      emit('toggle-aside', e)
    }
    return { handleMenu }
  }
}
</script>

<style lang="scss" scoped>
.sd--header{
  &__container{
    display: flex;
  }
  &__content{
    width: 100%;
    flex-wrap: wrap;
    padding: 8px 0px 8px 16px;
    background-color: var(--background-highlight);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__brand{
    flex-grow: 1;
  }
  &__nav{
    nav{
      flex-grow: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__subheader{
    width: 100%;
  }
}

</style>
