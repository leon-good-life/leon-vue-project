<template>
  <div class="welcome" dir="ltr">
    <h1>Hello {{loginData.firstName}}, {{welcomeToYourBuissnessMessage}}.</h1>
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
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    loginData() {
      return this.$store.state.loginData;
    },
    welcomeToYourBuissnessMessage() {
      const businesses = this.$store.state.loginData.businesses;
      if (Array.isArray(businesses) && businesses.length > 0) {
        return `welcome to your ${businesses[0].name}`;
      }
      return 'You have not set up your buissness yet.';
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