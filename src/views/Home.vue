<template>
<div class="home">
  <!-- TODO: Add sd-mast to containers demo-->
  <sd-mast title="Yay for components" subtitle="UI library built with Vue3" />
  <sd-container>
    <!-- TODO: Convert this into component.-->
    <section>
      <h3 class="sd--text__header">Recent Changes</h3>
      <p class="sd--text__footnote">3.11.2021</p>
      <ul>
        <li>Migrated library to use new npm package</li>
        <li>Migrated split library files into its own repo.</li>
        <li>Updated all github links to point to new repo.</li>
      </ul>
      <p class="sd--text__footnote">2.08.2021</p>
      <ul>
        <li>Updated Deps</li>
        <li>Updated <code>SdField</code>
          <ul>
            <li>Added icon handling start and end icons.</li>
            <li>Fixed input display for when the input is not bound to any data.</li>
          </ul>
        </li>
      </ul>
      <p class="sd--text__footnote">1.25.2021</p>
      <ul>
        <li>Remove Chart Demo</li>
        <li>Remove unused assets</li>
        <li>Add <code>jsconfig.js</code> to supress Vetur warnings.</li>
        <li>Added Demo for grid system <sd-chicklet theme="default" size="xs" >WIP</sd-chicklet>. </li>
        <li>Added sizing to <code>SdChicklet</code></li>
        <li>Update navigation with new demos</li>
        <li>Updated routes with new demos</li>
        <li>Rename some utility functions for better clarity.</li>
        <li>Added inline option top <code>sd-fieldset</code></li>
        <li>Update Containers demo with size options.</li>
      </ul>
      <p class="sd--text__footnote">1.16.2021</p>
      <ul>
        <li>Bump dependencies. (Vue 3.0.5)</li>
        <li>Use dart-sass</li>
        <li>Disable tick on SdSlider until edgecases are resolved.</li>
      </ul>
      <p class="sd--text__footnote">12.03.2020</p>
      <ul>
        <li>Bump dependencies. (Vue 3.0.4)</li>
      </ul>
      <p class="sd--text__footnote">11.30.2020</p>
      <ul>
        <li>Bump dependencies. (Vue 3.0.3)</li>
      </ul>
      <p class="sd--text__footnote">11.17.2020</p>
      <ul>
        <li>Adjustments to <code>SdDialogTitle</code> styling.</li>
        <li>Cleanup <code>SdDialog</code> demo.</li>
      </ul>
      <p class="sd--text__footnote">11.16.2020 pt.3</p>
      <ul>
        <li>Bump Dependencies</li>
      </ul>
      <p class="sd--text__footnote">11.16.2020 pt.2</p>
      <ul>
        <li>Fix width <code>sm</code> size on <code>SdButton</code> with using <code>icon-only</code></li>
        <li>Adjust <code>XL</code> size on <code>SdButton</code>, adjusted coresponding icon sizing.</li>
        <li>Add SVG theme handling to <code>SdButton</code></li>
      </ul>
      <p class="sd--text__footnote">11.16.2020 pt.1</p>
      <ul>
        <li>Add button to <code>SectionHeader</code> for github link.</li>
        <li>Adjust <code>svg</code> color handling in <code>SectionHeader</code> for <code>SdButton</code>.</li>
        <li>Add github link to each component demo.</li>
      </ul>
      <p class="sd--text__footnote">11.06.2020</p>
      <ul>
        <li>Bump Dependencies.</li>
        <li>Fix header emitters. <em>It appears 3.0.2 breaks event emitters withat a `-` in it. More research needed.</em>
        </li>
      </ul>
      <p class="sd--text__footnote">10.26.2020</p>
      <ul>
        <li>Fix styling for nav slot.</li>
      </ul>
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
        <li>Change github link to button in header</li>
        <li><code>FUTURE:</code> Add additional flexability for custom icons</li>
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
  @import '~/node_modules/@strizich/sdui/dist/scss/breakpoints';
  .home {
    padding-bottom: 64px;
    &__nav {
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
        &:hover {
          background-color: var(--secondary);
          color: #fff;
          transition: color .3s ease-in-out;
        }
      }
    }
  }
  .container {
    padding: 24px;
    &__content{
      padding: 0;
    }
  }
  section {
    margin-bottom: 64px;
  }

</style>
