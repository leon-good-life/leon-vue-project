<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/* Apply globally the default font */
@import 'https://cdn.d.greeninvoice.co.il/assets/web-app/2.2.331/components/webfonts/all.min.css';
#app {
  font-family: almoni-neue-dl, sans-serif;
}

/* Reset default browser CSS */
html, body {
  height: 100%;
}
body {
  margin: 0;
}

/* Other styles */
#app {
  height: 100%;
}
</style>
