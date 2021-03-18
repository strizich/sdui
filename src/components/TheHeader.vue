<template>
  <sd-header :aside-open="asideOpen" @toggle="handleMenu">
    <template v-slot:brand>
      <js-logo/>
    </template>
    <template v-slot:nav>
      <div class="link">
        <sd-button
          type="link"
          href="https://storybook.strizichdesign.com"
          target="_blank"
          flat
          size="sm"
        >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20" height="20" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 319">
        <defs>
          <path d="M9.872 293.324L.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975c.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004c-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388z" id="IconifyId-17847329bc8-bf57bd-6"/></defs>
          <mask id="IconifyId-17847329bc8-bf57bd-7"
            fill="var(--text)">
            <use xlink:href="#IconifyId-17847329bc8-bf57bd-6"/>
            </mask>
            <use fill="var(--text)" xlink:href="#IconifyId-17847329bc8-bf57bd-6"/>
            <path d="M188.665 39.127l1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 0 1-3.864 1.96l-11.835-9.325l-14.013 10.63a2.387 2.387 0 0 1-3.829-2.001zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131c0-42.402-22.752-64.684-64.415-64.684c-41.662 0-65.005 22.628-65.005 56.57c0 59.117 79.78 60.249 79.78 92.494c0 9.052-4.433 14.426-14.184 14.426c-12.705 0-17.729-6.49-17.138-28.552c0-4.786-48.458-6.278-49.936 0c-3.762 53.466 29.548 68.887 67.665 68.887c36.935 0 65.892-19.687 65.892-55.326c0-63.36-80.961-61.663-80.961-93.06c0-12.728 9.455-14.425 15.07-14.425c5.909 0 16.546 1.042 15.66 24.801z"
              fill="var(--background)"
              mask="url(#IconifyId-17847329bc8-bf57bd-7)"/></svg>
              <sd-tooltip placement="bottom">
                Storybook Documentation
              </sd-tooltip>
        </sd-button>
        <sd-button
          type="link"
          href="https://github.com/strizich/sdui-vite"
          target="_blank"
          flat
          size="sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 33">
            <path fill="var(--text)" fill-rule="evenodd"
              d="M152.608,55.455 C143.614,55.455 136.32,62.748 136.32,71.745 C136.32,78.942 140.987,85.047 147.46,87.201 C148.275,87.351 148.572,86.848 148.572,86.416 C148.572,86.03 148.558,85.005 148.55,83.646 C144.019,84.63 143.063,81.462 143.063,81.462 C142.322,79.58 141.254,79.079 141.254,79.079 C139.775,78.069 141.366,78.089 141.366,78.089 C143.001,78.204 143.861,79.768 143.861,79.768 C145.314,82.257 147.674,81.538 148.602,81.121 C148.75,80.069 149.171,79.351 149.636,78.944 C146.019,78.533 142.216,77.135 142.216,70.893 C142.216,69.115 142.851,67.66 143.893,66.522 C143.725,66.11 143.166,64.453 144.053,62.211 C144.053,62.211 145.42,61.773 148.532,63.881 C149.831,63.519 151.225,63.339 152.61,63.332 C153.994,63.339 155.387,63.519 156.688,63.881 C159.798,61.773 161.163,62.211 161.163,62.211 C162.052,64.453 161.493,66.11 161.326,66.522 C162.37,67.66 163,69.115 163,70.893 C163,77.151 159.191,78.528 155.563,78.931 C156.147,79.434 156.668,80.428 156.668,81.948 C156.668,84.125 156.648,85.882 156.648,86.416 C156.648,86.852 156.942,87.359 157.768,87.2 C164.236,85.041 168.899,78.94 168.899,71.745 C168.899,62.748 161.605,55.455 152.608,55.455"
              transform="translate(-136 -55)" />
          </svg>
            <sd-tooltip placement="bottom">
              Github Repository
            </sd-tooltip>
        </sd-button>
      </div>
    </template>
  </sd-header>
</template>

<script>
import { defineComponent } from 'vue'
import JsLogo from '@/components/JsLogo'

export default defineComponent({
  emits: ['toggle'],
  components: {
    JsLogo
  },
  props: {
    asideOpen: Boolean
  },
  setup (props, { emit }) {
    const handleMenu = (e) => {
      emit('toggle', e)
    }

    return {
      handleMenu
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
