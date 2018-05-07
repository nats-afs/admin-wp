import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import { sync } from 'vuex-router-sync'
import store from "./store";
import router from "./router";

const unsync = sync(store, router)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
