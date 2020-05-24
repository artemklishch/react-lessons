import Vue from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";

Vue.config.productionTip = false;
Vue.use(FlagIcon);

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
