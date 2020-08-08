<template>
  <div class="sd--modal__footer">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdModalFooter'
}
</script>

<style lang="scss" scoped>
.sd--modal{
  &__footer{
    display: flex;
    align-content: center;
    width: 100%;
    justify-content: flex-end;
    flex-shrink: 0;
    background: var(--background);
    border-top: 1px solid var(--background-highlight);
    border-radius: 0 0 3px 3px;
    backdrop-filter: blur(20px);
    padding: 8px 16px;
    @include breakpoint-down('sm') {
      padding: 16px;
      padding-bottom: calc(16px + ios-safe-area(bottom))
    }
  }
}
</style>
