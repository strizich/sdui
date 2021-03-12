<template>
  <div class="demo">
    <section-header
      title="List"
      sub-title="Work in progress"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdList"
    />
    <sd-list loading>
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
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'DemoList',
  components: { SectionHeader }
}
</script>

<style lang="scss" scoped>
.demo{
  padding:40px;
}
</style>
