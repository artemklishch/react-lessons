import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "none"
  },
  mutations: {
    UPDATE_STATUS(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    EXECUTE_OPERATION({ commit }) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).then(response => {
        commit("UPDATE_STATUS", response);
      });
    }
  }
});
