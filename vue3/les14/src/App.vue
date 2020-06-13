<template>
  <div id="app">
    <input type="text" v-model="cntName" />
    <Parent />
  </div>
</template>

<script>
import Parent from "./components/Parent";
import http from "./http";
export default {
  name: "App",
  provide() {
    return {
      http,
      getCntName: this.getCntName
    };
  },
  data() {
    return {
      cntName: ""
    };
  },
  methods:{
    getCntName(){
      return this.cntName
    }
  },
  components: {
    Parent
  }
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
