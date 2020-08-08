<template>
  <div class="sd--dialog__header">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdDialogTitle'
}
</script>

<style lang="scss" scoped>
  .sd--dialog{
    &__header{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      border-top: 1px solid var(--divider);
      border-bottom: 1px solid var(--divider);
      background-color: var(--background);
      flex-shrink: 0;
      & > h3 {
        font-size: 20px;
        margin: 0;
        font-weight: 500;
      }
    }
  }
</style>
