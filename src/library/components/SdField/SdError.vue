<template>
  <div class="sd--text__error">
    {{error}}
    <slot v-if="!error" />
  </div>
</template>

<script>
export default {
  props: {
    error: String
  }
}
</script>

<style lang="scss" scoped>
  .sd--text{
    &__error{
      color: var(--danger-highlight);
      font-size: 14px;
    }
  }
</style>
