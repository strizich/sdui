<template>
<div class="home">
  <sd-mast title="Yay for components" subtitle="UI library built with Vue3" />
  <sd-container>
    <sd-row>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <sd-sheet padded>
          <h3>This is a sheet</h3>
          <p>It is a generic container with light styling</p>
        </sd-sheet>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <sd-sheet theme="secondary" padded>
          <h3>
            <sd-skeleton height="24"/>
          </h3>
          <p>
            <sd-skeleton/>
            <sd-skeleton/>
          </p>
        </sd-sheet>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <sd-sheet theme="success" padded>
          <sd-skeleton :height="250" :min-width="100"/>
          <p>
            <sd-skeleton/>
            <sd-skeleton/>
          </p>
        </sd-sheet>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <router-link
          to="/components/buttons"
          v-slot="{navigate}"
          custom
        >
          <widget title="Button" @click="navigate">
            img here
          </widget>
        </router-link>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <router-link
          to="/components/form-controls"
          v-slot="{navigate}"
          custom
        >
          <widget title="Form Control" @click="navigate">
            img here
          </widget>
        </router-link>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <router-link
          to="/components/slider"
          v-slot="{navigate}"
          custom
        >
          <widget title="Slider"  @click="navigate">
            img here
          </widget>
        </router-link>
      </sd-col>
      <sd-col :lg="3" :md="3" :sm="6" :xs="6">
        <router-link
          to="/components/icons"
          v-slot="{navigate}"
          custom
        >
          <widget title="Icons" @click="navigate">
            <div>
              <sd-skeleton :height="16"/>
            </div>
            <div>
              <sd-skeleton :height="16"/>
            </div>
          </widget>
        </router-link>
      </sd-col>
    </sd-row>
  </sd-container>
  <sd-list>
    <sd-list-item>
      <template #default>
        boop
      </template>
      <template #expandable>
        <sd-list>
          <sd-list-item>boop</sd-list-item>
          <sd-list-item>boop</sd-list-item>
          <sd-list-item>boop</sd-list-item>
          <sd-list-item>boop</sd-list-item>
          <sd-list-item>boop</sd-list-item>
        </sd-list>
      </template>
    </sd-list-item>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
  </sd-list>
  <sd-list>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
    <sd-list-item>boop</sd-list-item>
  </sd-list>
</div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SdList from '@/library/components/SdList/SdList'
import SdListItem from '@/library/components/SdList/SdListItem'
import Widget from '@/components/Widget'
export default defineComponent({
  name: 'AppHome',
  components: { Widget, SdList, SdListItem },
  setup () {
    const state = reactive({
      isLoading: true
    })
    return { state }
  }
})
</script>

<style lang="scss">
  .home{
    padding-bottom: 64px;
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
