<template>
  <router-link
    :to="to"
    v-slot="{href, navigate, isActive, isExactActive}"
    custom
  >
    <sd-nav-content
      :icon="icon"
      :href="href"
      :active="isActive"
      :exact-active="isExactActive"
      @click="navigate"
    >
      <slot />
    </sd-nav-content>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'
import SdNavContent from './SdNavContent'

export default defineComponent({
  props: {
    icon: String
  },
  components: { SdNavContent }
})
</script>

<style lang="scss" scoped>

</style>
