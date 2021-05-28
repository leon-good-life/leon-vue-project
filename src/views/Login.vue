<template>
  <SplitScreen>

    <SplitScreenPane>
      <LogoAndLoginForm />
    </SplitScreenPane>

    <SplitScreenPane>
      <LoginIllustration />
    </SplitScreenPane>

  </SplitScreen>
</template>

<script>
import SplitScreen from "@/components/SplitScreen.vue";
import SplitScreenPane from "@/components/SplitScreenPane.vue";
import LoginIllustration from "@/components/login/LoginIllustration.vue";
import LogoAndLoginForm from "@/components/login/LogoAndLoginForm.vue";

export default {
  name: "Login",
  components: {
    SplitScreen,
    SplitScreenPane,
    LoginIllustration,
    LogoAndLoginForm,
  },
};
</script>
