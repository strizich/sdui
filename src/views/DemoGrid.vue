<template>
  <sd-container full>
    <section-header
      title="Grid System"
      sub-title="Uses bootstrap grid system"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdGrid"
    />
  </sd-container>

  <sd-container full>
    <sd-grid>
      <sd-cell :md="6"><sd-sheet class="sheet1" padded>6</sd-sheet></sd-cell>
      <sd-cell :md="6"><sd-sheet padded full-height>6</sd-sheet></sd-cell>
      <sd-cell :md="3"><sd-sheet padded>3</sd-sheet></sd-cell>
      <sd-cell :md="2"><sd-sheet padded>2</sd-sheet></sd-cell>
      <sd-cell :md="2"><sd-sheet padded>2</sd-sheet></sd-cell>
      <sd-cell :md="2"><sd-sheet padded>2</sd-sheet></sd-cell>
      <sd-cell :md="2"><sd-sheet padded>2</sd-sheet></sd-cell>
      <sd-cell :md="3"><sd-sheet padded>3</sd-sheet></sd-cell>
      <sd-cell :md="3"><sd-sheet padded>3</sd-sheet></sd-cell>
      <sd-cell :md="6"><sd-sheet padded>6</sd-sheet></sd-cell>
    </sd-grid>
    <hr class="sd--divider"/>
    <sd-grid :columns="12">
      <sd-cell justify="center">1</sd-cell>
      <sd-cell justify="center">2</sd-cell>
      <sd-cell justify="center">3</sd-cell>
      <sd-cell justify="center">4</sd-cell>
      <sd-cell justify="center">5</sd-cell>
      <sd-cell justify="center">6</sd-cell>
      <sd-cell justify="center">7</sd-cell>
      <sd-cell justify="center">8</sd-cell>
      <sd-cell justify="center">9</sd-cell>
      <sd-cell justify="center">10</sd-cell>
      <sd-cell justify="center">11</sd-cell>
      <sd-cell justify="center">12</sd-cell>
    </sd-grid>
    <sd-grid :columns="12">
      <sd-cell :md="3"><sd-sheet>1 : 3</sd-sheet></sd-cell>
      <sd-cell :o-md="5" justify="center">2</sd-cell>
      <sd-cell justify="center">3</sd-cell>
      <sd-cell justify="center">4</sd-cell>
      <sd-cell justify="center">5</sd-cell>
      <sd-cell justify="center">6</sd-cell>
      <sd-cell justify="center">7</sd-cell>
      <sd-cell justify="center">8</sd-cell>
      <sd-cell justify="center">9</sd-cell>
      <sd-cell justify="center">10</sd-cell>
      <sd-cell justify="center">11</sd-cell>
      <sd-cell justify="center">12</sd-cell>
    </sd-grid>
  </sd-container>

  <hr class="sd--divider" />

  <sd-container full>
    <sd-row>
      <sd-col md="2"><sd-sheet class="demo__sheet" theme="primary" full-height padded>2</sd-sheet></sd-col>
      <sd-col md="4"><sd-sheet class="demo__sheet" theme="primary" full-height padded>3</sd-sheet></sd-col>
      <sd-col md="6"><sd-sheet class="demo__sheet" theme="primary" full-height padded>6</sd-sheet></sd-col>
      <sd-col md="1"><sd-sheet class="demo__sheet" theme="primary" padded>1</sd-sheet></sd-col>
      <sd-col md="3"><sd-sheet class="demo__sheet" theme="primary" padded>3</sd-sheet></sd-col>
      <sd-col md="5"><sd-sheet class="demo__sheet" theme="primary" padded>5</sd-sheet></sd-col>
      <sd-col md="3"><sd-sheet class="demo__sheet" theme="primary" padded>3</sd-sheet></sd-col>
    </sd-row>
  </sd-container>
  <hr class="sd--divider"/>
  <sd-container full>
    <sd-row>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
      <sd-col><sd-sheet class="demo__sheet" theme="primary" padded>Auto Width</sd-sheet></sd-col>
    </sd-row>
  </sd-container>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'

export default {
  components: { SectionHeader }
}
</script>

<style lang="scss" scoped>
  .demo{
    &__page{
      padding-top: 40px;
    }
    &__sheet{
      margin-bottom:8px;
      height: auto;
    }
  }
  .sheet1{
    height: 200px;
  }
</style>
