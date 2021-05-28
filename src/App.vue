<template>
  <div id="app">
    <menu v-if="currentRouteNotLogin" class="menu">
      <router-link to="/welcome">Welcome</router-link> |
      <router-link to="/user-info">User Info</router-link>
    </menu>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteNotLogin() {
      console.log(this.$route.name);
      return this.$route.name !== "Login";
    },
  },
};
</script>


<style lang="scss">
/* Apply globally the default font */
@import "https://cdn.d.greeninvoice.co.il/assets/web-app/2.2.331/components/webfonts/all.min.css";
#app {
  font-family: almoni-neue-dl, sans-serif;
}

/* Reset default browser CSS */
html,
body {
  height: 100%;
}
body {
  margin: 0;
}

/* Add theme colors */
:root {
  --primary: #23445a;
  --secondary: #0084f4;
  --action: #18c746;
  --light: #ffffff;
  --lightBackground: lightgray;
}

/* Other styles */
#app {
  height: 100%;
}
.menu {
  text-align: center;
  color: var(--primary);
  padding: 0;
  a {
    color: var(--secondary);
  }
}
</style>
