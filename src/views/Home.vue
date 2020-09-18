<template>
<div class="home">
  <sd-mast title="Yay for components" subtitle="UI library built with Vue3" />
  <sd-container>
    <sd-row>
      <sd-col :xl="2" :lg="3" :md="4" :sm="6" :xs="6">
        <widget title="Button">
          img here
        </widget>
      </sd-col>
      <sd-col :xl="2" :lg="3" :md="4" :sm="6" :xs="6">
        <widget title="Button">
          img here
        </widget>
      </sd-col>
            <sd-col :xl="2" :lg="3" :md="4" :sm="6" :xs="6">
        <widget title="Button">
          img here
        </widget>
      </sd-col>
      <sd-col :xl="2" :lg="3" :md="4" :sm="6" :xs="6">
        <widget title="Button">
          img here
        </widget>
      </sd-col>
    </sd-row>

  </sd-container>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { SdMast, SdContainer, SdRow, SdCol } from '@/library'
import Widget from '@/components/Widget'
export default defineComponent({
  name: 'Home',
  components: { SdMast, SdContainer, SdRow, SdCol, Widget },
  setup (props) {
    const switchVal = ref(false)
    return {
      switchVal
    }
  }
})
</script>

<style lang="scss">
  .home{
    &__nav{
      position: sticky;
      top: 50px;
      padding: 8px 24px;
      background: var(--background);
      z-index: 500;
      border-bottom: 1px solid var(--background-accent);
      @include breakpoint-down('sm'){
        display: none;
      }
      a {
        padding: 8px 16px;
        margin-right: 8px;
        display: inline-block;
        color: var(--secondary);
        border-radius: 3px;
        transition: color .1s ease-in-out, background-color .2s ease-in-out;
        &.router-link-exact-active{
          background-color: var(--background-highlight);
        }
        &:hover{
          background-color: var(--secondary);
          color: #fff;
          transition: color .3s ease-in-out;
        }
      }
    }
  }
  .container{
    padding: 24px;
    &__content{
      padding: 0;
    }
  }
  section{
    margin-bottom: 64px;
  }

</style>
