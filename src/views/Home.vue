<template>
<div class="home">
  <!-- TODO: Add sd-mast to containers demo-->
  <sd-mast title="Yay for components" subtitle="UI library built with Vue3" />
  <sd-container>
    <!-- TODO: Convert this into component.-->
    <section>
      <h3 class="sd--text__header">Recent Changes</h3>
      <p class="sd--text__footnote">10.23.2020</p>
      <ul>
        <li>Added Hover state to dismissable chicklets</li>
        <li>Added <code>icon</code> prop to <code>sd-chicklet</code>.</li>
        <li>Added some notes for future plans for <code>sd-sheets</code></li>
        <li>Added Containers Demo</li>
        <ul>
          <li><code>sd-sheet</code> demo</li>
          <li><code>sd-chicklet</code> demo</li>
          <li>Links added to sidebar</li>
        </ul>
        <li>Adjust padding lists <code>ul > li</code></li>
        <li>Adjust padding on nested lists <code>ul > ul</code></li>
      </ul>
    </section>
  </sd-container>
</div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'AppHome',
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
