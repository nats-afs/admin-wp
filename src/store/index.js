import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth'
import messages from './modules/messages'
export default new Vuex.Store({
  state: {
    drawer: true
  },
  getters: {
    isVisible: (state) => { return state.drawer }
  },
  mutations: {
    toogleSidebar: (state) => state.drawer = !state.drawer
  },
  modules:{
    auth,
    messages
  }
});