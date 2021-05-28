<template>
  <div class="user-info" dir="ltr">
    <h1>User Info</h1>
    <span>
      <dl>
        <dt>Email:</dt>
        <dd>{{ loginData.email }}</dd>
        <dt>First Name:</dt>
        <dd>{{ loginData.firstName }}</dd>
        <dt>Last Name:</dt>
        <dd>{{ loginData.lastName }}</dd>
        <dt>Phone:</dt>
        <dd>{{ loginData.phone }}</dd>
      </dl>
      <dl v-for="business in loginData.businesses" :key="business.nameEn">
        <dt>Buissness Name:</dt>
        <dd>{{ business.name }}</dd>
        <dt>Address:</dt>
        <dd>{{ business.address }}</dd>
        <dt>City:</dt>
        <dd>{{ business.city }}</dd>
      </dl>
    </span>
    <PrimaryButton :click="logout">Logout</PrimaryButton>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  name: "UserInfo",
  components: {
    PrimaryButton,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    loginData() {
      return this.$store.state.loginData;
    },
  },
};
</script>

<style scoped lang="scss">
.user-info {
  color: val(--primary);
  text-align: center;
  dl {
    text-align: left;
    width: 400px;
    margin: 0 auto;
    background-color: var(--lightBackground);
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 5px;
  }
  dt {
    font-weight: bold;
    color: val(--primary);
    text-decoration: underline;
  }
}
</style>