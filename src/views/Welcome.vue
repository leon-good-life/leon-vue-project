<template>
  <div class="welcome" dir="ltr">
    <h1>Hello {{loginData.firstName}}, welcome to your {{loginData.businesses[0].name}}.</h1>
    <PrimaryButton :click="logout">Logout</PrimaryButton>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  name: "Welcome",
  components: {
    PrimaryButton
  },
  methods: {
    logout () {
      this.$store.dispatch("logout").then(() => this.$router.push("/"));
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    loginData() {
      return this.$store.state.loginData;
    },
    hasLoginData() {
      return !!this.$store.state.loginData;
    }
  }
};
</script>

<style scoped lang="scss">
.welcome {
  color: var(--primary);
  text-align: center;
}
</style>