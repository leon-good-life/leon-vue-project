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
    <a href="#" class="forgot-password" v-on:click="noNeedToImplement"
      >שכחת סיסמה?</a
    >
    <PrimaryButton
      type="submit"
      class="submit-button"
      v-bind:loading="isLoading"
      >כניסה</PrimaryButton
    >
    <div class="error" v-if="loginError">שגיאה: {{ loginError }}</div>
    <div class="join">
      עוד לא הצטרפת?
      <a href="#" v-on:click="noNeedToImplement">ל-30 יום ניסיון חינם</a>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import PrimaryButton from "@/components/PrimaryButton.vue";

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
  methods: {
    submitLogin() {
      const { email, password } = this;
      this.$store.dispatch("login", { email, password }).then(() => {
        if (this.isAuthenticated) {
          this.$router.push('/welcome');
        }
      });
    },
    noNeedToImplement() {
      alert("לא צריך לממש לפי ההוראות");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    isLoading() {
      return this.$store.state.loginLoading;
    },
    loginError() {
      return this.$store.state.loginError;
    },
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
  .error {
    color: var(--error);
    padding-top: 15px;
  }
  .join {
    color: var(--secondary);
    padding: 40px 0;
    font-size: 18px;
  }
  .join > a {
    color: var(--secondary);
  }
}
</style>
