<template>
  <div id="app-container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './library/scss/reset';
@import './library/scss/engine';
@import './library/scss/css-vars';

html, body{
  background-color: var(--background);
  color: var(--text);
}
</style>
