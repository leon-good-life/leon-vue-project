import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// const API_URL = "https://jupiter.d.greeninvoice.co.il/api/v1";
const API_URL = 'api/v1'; // proxy is implemented on dev server to avoid CORS error

export default new Vuex.Store({
  state: {
    loginData: null,
    loginError: null,
    loginLoading: false
  },
  mutations: {
    setLoginData(state, loginData) {
      state.loginData = loginData;
      state.loginLoading = false;
    },
    setLoginError(state, loginError) {
      state.loginError = loginError;
      state.loginLoading = false;
    },
    setLoginLoadingTrue(state) {
      state.loginLoading = true;
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      commit('setLoginLoadingTrue');
      try {
        fetch(`${API_URL}/account/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
        })
          .then((response) => response.json())
          .then((response) => commit('setLoginData', response))
          .catch((error) => commit('setLoginError', error));
      } catch (exceptionErr) {
        commit('setLoginError', exceptionErr);
      }
    },
    logout({ commit }) {
      commit('setLoginData', null);
      try {
        fetch(`${API_URL}/account/logout`, {
          method: "POST"
        })
          .catch((error) => console.error('On Logout', error));
      } catch (exceptionErr) {
        console.error('On Logout', exceptionErr);
      }
    }
  },
  modules: {
  }
})
