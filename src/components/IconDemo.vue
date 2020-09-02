<template>
  <section>
    <p class="sd--text__footnote">Powered by: Material Icons Font</p>
    <h1>Icons</h1>
    <sd-fieldset>
      <sd-field>
        <sd-label>Icon Search</sd-label>
        <input type="search" v-model="iconSearch"/>
        <sd-error>This component is a WIP</sd-error>
      </sd-field>
    </sd-fieldset>
    <select v-model="resultCount">
      <option value="25">25</option>
      <option value="100">100</option>
      <option value="200">200</option>
      <option value="300">300</option>
      <option value="400">400</option>
      <option value="2000">400+</option>
    </select>
    <div class="demo__icons">
      <div class="demo__icon" v-for="(name, index) in totalFilteredResults" :key="name + index">
        <sd-icon size="lg" :name="name" />
        <small>{{name}}</small>
      </div>
    </div>
    <sd-label>Showing {{totalFilteredResults.length}} of {{matIcons.length}}</sd-label>
  </section>
</template>

<script>
import MAT_ICONS from '@/assets/MatIconList'
import { defineComponent, computed, ref } from 'vue'
import { SdFieldset, SdIcon, SdLabel, SdField, SdError } from '@/library'

export default defineComponent({
  setup () {
    const matIcons = MAT_ICONS.sort()
    const iconSearch = ref('')
    const resultCount = ref(25)

    const searchResult = computed(() => {
      return matIcons.filter((icon) => {
        return icon.toLowerCase().includes(iconSearch.value.toLowerCase())
      })
    })

    const totalFilteredResults = computed(() => {
      return searchResult.value.slice(0, resultCount.value)
    })

    return { iconSearch, matIcons, searchResult, resultCount, totalFilteredResults }
  },
  components: { SdIcon, SdFieldset, SdField, SdLabel, SdError }
})
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
    height: 20%;
    white-space: wrap;
    width: calc(100% / 6);
    @include breakpoint-down('md'){
       width: calc(100% / 4);
    }
    @include breakpoint-down('sm'){
      width: calc(100% / 3);
    }
    @include breakpoint-down('xs'){
      width: calc(100% / 2);
    }
  }
}
</style>
