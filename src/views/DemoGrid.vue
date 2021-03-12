<template>
  <div class="demo__page">
    <sd-container>
      <section-header
        title="Grid System"
        sub-title="Uses bootstrap grid system"
        git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdGrid"
      />
    </sd-container>
    <sd-container>
      <sd-row>
        <sd-col md="2"><sd-sheet class="demo__sheet" theme="primary" padded>2</sd-sheet></sd-col>
        <sd-col md="4"><sd-sheet class="demo__sheet" theme="primary" padded>3</sd-sheet></sd-col>
        <sd-col md="6"><sd-sheet class="demo__sheet" theme="primary" padded>6</sd-sheet></sd-col>
        <sd-col md="1"><sd-sheet class="demo__sheet" theme="primary" padded>1</sd-sheet></sd-col>
        <sd-col md="3"><sd-sheet class="demo__sheet" theme="primary" padded>3</sd-sheet></sd-col>
        <sd-col md="5"><sd-sheet class="demo__sheet" theme="primary" padded>5</sd-sheet></sd-col>
        <sd-col md="3"><sd-sheet class="demo__sheet" theme="primary" padded>3</sd-sheet></sd-col>
      </sd-row>
    </sd-container>
    <hr class="sd--divider"/>
    <sd-container>
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
  </div>
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
</style>
