import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";

new Vue({
  router,
  el: "#app1",
  data: {},
  render: h => h(App)
});
