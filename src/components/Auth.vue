<template lang="pug">
  div
    h1 Welcome to My Awesome App
    #firebaseui-auth-container
    #loader Loading...
</template>
<script>
import { uiAuth, uiAuthConfig } from "@/config/authConfig";
export default {
  data: () => ({}),
  mounted() {
    if (uiAuth.isPendingRedirect) {
      uiAuth.start("#firebaseui-auth-container", uiAuthConfig);
    }
  }
};
</script>

