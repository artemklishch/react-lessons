<template>
  <div id="app">
    <div>
      <a href="#" @click="setLocale('en')"><flag iso="us"></flag></a>
      <a href="#" @click="setLocale('ru')"><flag iso="ru"></flag></a>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="$t('welcomeMsg')" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    setLocale(locale) {
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs);
        this.$i18n.locale = locale;
      });
      // this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
