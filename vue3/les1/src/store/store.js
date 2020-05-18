import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products
  },
  actions: {
    loadProducts(context, products) {
      // fetch(url).then(res => res.json()).then(result => context.commit('loadProducts', result))
      context.commit("loadProducts", products);
    }
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload;
    }
  }
});
