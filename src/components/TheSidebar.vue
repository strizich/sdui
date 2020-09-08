<template>
  <ul class="side">
    <li><router-link to="/">home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>

<style lang="scss" scoped>
.side{
  position: sticky;
  top: 0;
  left:0;
  height: 100vh;
}
</style>
