<template lang="pug">
  div
    h1 Signup succeeded
    button(@click='logOut') Log out
    hr
    img(:src='photo', style='height: 120px')
    br
    p {{name}}
    p {{email}}
    p {{userId}}
    hr
    pre.
      \n{{user}}    
</template>
<script>
// import { firebaseListener } from "@/config/firebaseConfig";
export default {
  data: () => ({
    photo: "",
    userId: "",
    name: "",
    email: "",
    user: {}
  }),
  mounted(){
    console.log('AuthSucces mounted');
    
  },
  created() {
    console.log('AuthSucces created')
  },
  methods: {
    logOut() {
      // firebase.auth().signOut();
      console.log('logout from AuthSuccess')
    }
  }
};
</script>