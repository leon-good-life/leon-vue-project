<template>
  <div class="split-screen-pane">
      <slot></slot>
  </div>
</template>

<style scoped lang="scss">
/* Smartphone and Small Tablet */
@media only screen and (max-width: 700px) {
  .split-screen-pane {
    flex-grow: 1;
  }
}
/* Large Tablet and Desktop */
@media only screen and (min-width: 701px) {
  .split-screen-pane {
    width: 50%;
  }
}
</style>
