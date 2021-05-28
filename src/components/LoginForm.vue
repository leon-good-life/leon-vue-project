<template>
  <form class="login-form" v-on:submit.prevent="submitLogin">
    <h1 class="heading">היי, טוב לראות אותך</h1>
    <input
      v-model="email"
      type="email"
      placeholder="מייל"
      name="email"
      id="email"
    />
    <label for="email" class="email-label"
      >כתובת המייל איתה נרשמת לחשבונית ירוקה</label
    >
    <input
      v-model="password"
      type="password"
      placeholder="סיסמא"
      name="password"
      id="password"
    />
    <a href="#" class="forgot-password">שכחת סיסמה?</a>
    <PrimaryButton type="submit" class="submit-button" v-bind:loading="isLoading">כניסה</PrimaryButton>
    <span v-if="loginError">שגיאה: {{loginError}}</span>
    <span class="join">
      עוד לא הצטרפת?
      <a href="#">ל-30 יום ניסיון חינם</a>
    </span>
  </form>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';

export default {
  name: "LoginForm",
  components: {
    PrimaryButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    if (this.hasLoginData) {
      this.$router.push('/welcome');
    }
  },
  updated() {
    if (this.hasLoginData) {
      this.$router.push('/welcome');
    }
  },
  methods: {
    submitLogin () {
      const { email, password } = this;
      this.$store.dispatch("login", { email, password });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.loginLoading;
    },
    hasLoginData() {
      return !!this.$store.state.loginData;
    },
    loginError() {
      return this.$store.state.loginError;
    }
  }
};
</script>

<style scoped lang="scss">
.login-form {
  margin: 0 auto;

  .heading {
    font-size: 56px;
    color: var(--primary);
    line-height: 48px;
    letter-spacing: 0;
  }
  input {
    font-size: 18px;
    line-height: 22px;
    padding: 6px 4px;
    border-width: 0 0 1px 0;
    display: block;
    width: 100%;
    margin-top: 65px;
  }
  input::placeholder {
    color: var(--primary);
  }
  .email-label {
    color: var(--primary);
    font-size: 14px;
  }
  .forgot-password {
    color: var(--primary);
    display: block;
  }
  .submit-button {
    margin-top: 67px;
  }
  .join {
    color: var(--secondary);
    display: block;
    padding: 40px 0;
    font-size: 18px;
  }
  .join > a {
    color: var(--secondary);
  }
}
</style>
