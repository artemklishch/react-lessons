import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      technologies: [
        {
          id: 1,
          name: "Vue.js",
          description: "Super cool JS framework"
        },
        {
          id: 2,
          name: "Nuxt.js",
          description: "Super cool JS framework based on Vue.js"
        }
      ]
    }
  });

export default store;
