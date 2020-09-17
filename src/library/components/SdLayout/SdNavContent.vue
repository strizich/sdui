<template>
  <a :href="href" :class="[linkClasses]" >
    <sd-icon :name="icon" v-if="icon"/>
    <span class="sd--nav__content">
      <slot />
    </span>
  </a>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { SdIcon } from '@/library'
export default defineComponent({
  components: { SdIcon },
  props: {
    href: String,
    active: Boolean,
    exactActive: Boolean,
    variant: String,
    icon: String
  },
  setup (props) {
    const linkClasses = computed(() => {
      return {
        'sd--nav__item': true,
        'is--active': props.active,
        'is--exact-active': props.exactActive
      }
    })
    return {
      linkClasses
    }
  }
})
</script>

<style lang="scss" scoped>
.sd--nav{
    // &__content{
    // }
    &__item{
    color: var(--text);
    font-weight: 300;
    letter-spacing: 1.5;
    transition: background-color .23s ease-in-out;
    position: relative;
    &:after{
      transition: all .23s ease-in-out;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      right: 0;
      background-color: var(--background);
      z-index: -1;
      opacity: 0;
    }
    &:hover{
      background-color: transparentize(#000, 0.9);
    }
    .sd--icon{
      margin-right: 4px;
    }
    &.is--active, &.is--exact-active{
      color: #fff;
      &:after{
        transition: left .23s ease-in-out, opacity .23s ease-in-out, right .23s ease-in-out;
        background-image: linear-gradient(90deg, var(--background-highlight) 50%,var(--primary-accent) 100%);
        opacity: 1;
        left: 0%;
        right: 0%
      }
    }
    // &.is--exact-active{
    //   color: #fff;
    //   background: var(--primary-accent);
    // }
  }
}
</style>
