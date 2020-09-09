<template>
  <section>
    <sd-container full>
    <p class="sd--text__footnote">Powered by: Material Icons Font</p>
    <h1>Icons</h1>
    <sd-fieldset class="demo__actionbar">
      <sd-field
        type="text"
        label="Icon Lookup"
        v-model="iconSearch"
        placeholder="Search all icons"
      />
      <sd-select label="results" v-model="resultCount">
        <option value="25">25</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="2000">400+</option>
      </sd-select>
    </sd-fieldset>
    <div class="demo__icon-container">
      <div class="demo__icons" v-if="totalFilteredResults.length >= 1">
        <div class="demo__icon" v-for="(name, index) in totalFilteredResults" :key="name + index">
          <sd-icon size="lg" :name="name" />
          <small>{{name}}</small>
        </div>
      </div>
      <div class="demo__icons--empty" v-else>
        <sd-icon color="var(--warning)" name="sentiment_very_dissatisfied" size="xxl"/>
        <span>Nothing here</span>
      </div>
    </div>
    <div class="demo__icon-footer">
      <sd-label>Showing {{totalFilteredResults.length}} of {{matIcons.length}}</sd-label>
    </div>
    </sd-container>
  </section>
</template>

<script>
import MAT_ICONS from '@/assets/MatIconList'
import { defineComponent, computed, ref } from 'vue'
import { SdIcon, SdLabel, SdField, SdSelect, SdFieldset, SdContainer } from '@/library'

export default defineComponent({
  setup () {
    const matIcons = MAT_ICONS.sort()
    const iconSearch = ref('')
    const resultCount = ref(25)
    const error = ref(false)

    const searchResult = computed(() => {
      return matIcons.filter((icon) => {
        const result = icon.toLowerCase().includes(iconSearch.value.toLowerCase())
        return result
      })
    })

    const totalFilteredResults = computed(() => {
      return searchResult.value.slice(0, resultCount.value)
    })

    return { iconSearch, matIcons, searchResult, resultCount, totalFilteredResults, error }
  },
  components: { SdIcon, SdField, SdLabel, SdSelect, SdFieldset, SdContainer }
})
</script>

<style lang="scss" scoped>
.demo__actionbar{
  width: 100%;
}
.demo{
  &__icon-container{
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 16px;
    padding: 16px 0;
    background-color: var(--background-accent);
  }
  &__icon-footer{
    display: flex;
    justify-content: center;;
  }
  &__icons{
    display:flex;
    flex-wrap: wrap;
    small{
      display:block;
    }
    &--empty{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        margin-top: 8px;
      }
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
