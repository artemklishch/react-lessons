import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from './store/store'

new Vue({
  router,
  store,
  el: "#app1",
  data: {},
  render: h => h(App)
});
