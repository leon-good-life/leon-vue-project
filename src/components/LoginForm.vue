<template>
  <form class="login-form">
    <h1 class="heading">היי, טוב לראות אותך</h1>
    <input type="email" placeholder="מייל" name="email" id="email" />
    <label for="email" class="email-label"
      >כתובת המייל איתה נרשמת לחשבונית ירוקה</label
    >
    <input type="password" placeholder="סיסמא" />
    <a href="#" class="forgot-password">שכחת סיסמה?</a>
    <button type="submit" class="submit-button">כניסה</button>
    <span class="join">
      עוד לא הצטרפת?
      <a href="#">ל-30 יום ניסיון חינם</a>
    </span>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$dark-blue: #23445a;
$light-blue: #0084f4;
$green: #18c746;

.login-form {
  margin: 0 auto;

  .heading {
    font-size: 56px;
    color: $dark-blue;
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
    color: $dark-blue;
  }
  .email-label {
    color: $dark-blue;
    font-size: 14px;
  }
  .forgot-password {
    color: $dark-blue;
    display: block;
  }
  .submit-button {
    height: 56px;
    width: 228px;
    display: block;
    background-color: $green;
    border-radius: 100px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-top: 67px;
  }
  .join {
    color: $light-blue;
    display: block;
    padding: 40px 0;
    font-size: 18px;
  }
  .join > a {
    color: $light-blue;
  }
}
</style>
