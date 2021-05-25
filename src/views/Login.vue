<template>
  <SplitScreen>

    <SplitScreenPane>
      <LogoAndLoginForm />
    </SplitScreenPane>

    <SplitScreenPane>
      <Illustration />
    </SplitScreenPane>

  </SplitScreen>
</template>

<script>
import SplitScreen from "@/components/SplitScreen.vue";
import SplitScreenPane from "@/components/SplitScreenPane.vue";
import Illustration from "@/components/Illustration.vue";
import LogoAndLoginForm from "@/components/LogoAndLoginForm.vue";

export default {
  name: "Login",
  components: {
    SplitScreen,
    SplitScreenPane,
    Illustration,
    LogoAndLoginForm,
  },
};
</script>
