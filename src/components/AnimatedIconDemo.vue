<template>
  <div class="demo">
    <h1>Animated Elements</h1>
    <div class="demo__flex">
      <sd-mouse /><small>Animated Mouse</small>
    </div>
    <div class="demo__flex">
      <sd-hamburger />
      <small>Menu Button (click for effect)</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedIconDemo'
}
</script>

<style lang="scss" scoped>
.demo{
  margin-bottom: 64px;
  &__flex{
    display:flex;
    align-items: center;
    width: 300px;
    justify-content:space-between;
    border-bottom: 1px solid var(--divider);
    padding: 8px 0;
    small{
      margin-left: 8px;
    }
  }
}
</style>
