import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "New",
    user: "Unknown",
  },
  mutations: {
    UPDATE_STATUS(state, payload) {
      state.status = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    EXECUTE_OPERATION({ commit }) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Processed");
        }, 3000);
      }).then((response) => {
        commit("UPDATE_STATUS", response);
      });
    },
    AUTHENTICATION({ commit }) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Max B.");
        }, 3000);
      }).then((response) => {
        commit("SET_USER", response);
      });
    },
  },
  getters:{
    getStatus(state){
      return state.status
    },
    getUser(state){
      return state.user
    }
  },
  modules: {},
});
