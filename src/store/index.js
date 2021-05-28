import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// const API_URL = "https://jupiter.d.greeninvoice.co.il/api/v1";
const API_URL = 'api/v1'; // proxy is implemented on dev server to avoid CORS error

export default new Vuex.Store({
  state: {
    loginData: JSON.parse(localStorage.getItem('loginData')),
    loginError: null,
    loginLoading: false
  },
  mutations: {
    setLoginData(state, loginData) {
      state.loginData = loginData;
      if (!loginData) {
        localStorage.removeItem('loginData');
      } else {
        localStorage.setItem('loginData', JSON.stringify(loginData));
      }
    },
    setLoginError(state, loginError) {
      state.loginError = loginError;
    },
    setLoginLoading(state, loginLoading) {
      state.loginLoading = loginLoading;
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      commit('setLoginLoading', true);
      commit('setLoginError', null);
      return new Promise((resolve, reject) => {
        fetch(`${API_URL}/account/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            // In `fetch` both success 2xx and error 4xx, 5xx responses goes into "then"
            // Axios library can be used for a better code next time.
            commit('setLoginLoading', false);
            if (response.errorMessage) {
              commit('setLoginError', response.errorMessage);
              reject();
            } else if (response.errorCode) {
              commit('setLoginError', response.errorMessage);
              reject();
            } else {
              commit('setLoginData', response);
              resolve();
            }
          })
          .catch((error) => {
            commit('setLoginLoading', false);
            commit('setLoginError', error);
            reject();
          });
      });
    },
    logout({ commit }) {
      commit('setLoginData', null);
      return new Promise((resolve, reject) => {
        fetch(`${API_URL}/account/logout`, {
          method: "POST"
        })
          .then(response => {
            if (response.ok) {
              resolve();
            } else {
              reject();
            }
          })
          .catch((error) => {
            console.error('On Logout', error);
            reject();
          });
      });
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!state.loginData && !state.loginError;
    }
  }
})
