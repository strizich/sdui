<template>
  <section>
    <p class="sd--text__footnote">Powered by: Material Icons Font</p>
    <h1>Icons</h1>
    <div class="demo__icons">
      <div class="demo__icon" v-for="name in matIcons" :key="name">
        <sd-icon size="lg" :name="name" />
        <small>{{name}}</small>
      </div>
    </div>
  </section>
</template>

<script>
import MAT_ICONS from '@/assets/MatIconList'
import { SdIcon } from '@/library'
export default {
  setup () {
    const matIcons = MAT_ICONS
    return { matIcons }
  },
  components: { SdIcon }
}
</script>

<style lang="scss" scoped>

.demo{
  &__icons{
    display:flex;
    flex-wrap: wrap;
    small{
      display:block;
    }
  }
  &__icon{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    width: 200px;
    height: 20%;
    white-space: wrap;
    @include breakpoint-down('sm'){
      width: 33%;
    }
  }
}
</style>
