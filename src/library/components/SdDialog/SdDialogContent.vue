<template>
  <div class="sd--dialog__content">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdDialogContent'
}
</script>

<style lang="scss" scoped>
  .sd--dialog__content{
    background-color: var(--background);
    padding: 8px 16px;
    flex-grow: 2;
    @include breakpoint-up('md'){
      max-height: 600px;
    }
    overflow-y: auto;
    overflow-x:hidden;
  }
</style>
