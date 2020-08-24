<template>
  <div class="sd--card__body">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'SdCardBody'
}
</script>

<style lang="scss" scoped>
.sd--card {
  &__body{
    padding: spacing(inset);
    flex-grow: 2;
  }
}
</style>
