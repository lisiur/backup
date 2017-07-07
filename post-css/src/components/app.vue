<template>
  <div id="app">
    <button type="button" class="btn-warning">test</button>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style>
  @import '../styles/constant.css';
  :root {
    --btn-color-warning: var(--yellow);
    --btn-color-warning-hover: color(var(--btn-color-warning) shade(20%));
  }
  .btn-warning {
    background: var(--btn-color-warning);
    &:hover {
      background: var(--btn-color-warning-hover);
    }
  }
</style>
