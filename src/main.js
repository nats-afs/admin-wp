import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import {
  sync
} from 'vuex-router-sync'
import store from "./store";
import router from "./router";
import {
  firebaseListener
} from '@/config/firebaseConfig';

const unsync = sync(store, router)

firebaseListener(authStatusChange);

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

function authStatusChange(loggedIn, user) {
  if (store) {
    store.commit('AUTH_STATUS_CHANGE');
    if (user) {
      // store.dispatch('getShoppingCart', {
      //   uid: user.uid,
      //   currentCart: store.getters.cartItemList
      // });
      console.log('Usuario autenticado');
    }
  }

}