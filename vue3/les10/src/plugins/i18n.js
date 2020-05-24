import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "ru",
  messages: {
    en: {
      welcomeMsg: "Welcome to Your Vue.js App",
      pluginsTxt: "Installed CLI Plugins",
      guideTxt:
        "For a guide and recipes on how to configure / customize this project,{break}check out the",
      guideDocTxt: "vue-cli documentation",
    },
    ru: {
      welcomeMsg: "Приветствую во Vue.js App",
      pluginsTxt: "Установленые CLI Plugins",
      guideTxt:
        "Для руководства и примеров как настроить этот проект,{break}смотреть",
      guideDocTxt: "vue-cli документацию",
    },
  },
});
