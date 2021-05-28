<template>
  <div class="logo-and-login">
    <div class="logo-container">
      <img src="@/assets/logo.svg" class="logo" alt="חשבונית ירוקה" />
    </div>
    <div class="login-form-container">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  name: "LogoAndLoginForm",
  components: {
    LoginForm,
  },
};
</script>


<style scoped lang="scss">
.logo-and-login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.logo-container {
  padding: 34px 86px 4px;
  .logo {
    width: 221px;
  }
}

.login-form-container {
  padding: 0px 86px;
  flex-grow: 1;
  display: flex;
  overflow-y: auto;
}

/* On high-resolution desktop monitor */
@media only screen and (min-height: 600px) {
  .login-form-container {
    align-items: center;
  }
}
</style>