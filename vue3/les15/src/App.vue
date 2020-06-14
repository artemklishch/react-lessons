<template>
  <div id="app">
    <h1>Composition API</h1>
    <!-- <SimpleList /> -->
    <!-- <SimpleList2 /> -->
    <SimpleList3 />
  </div>
</template>

<script>
// import SimpleList from "./components/SimpleList";
// import SimpleList2 from "./components/SimpleList2";
import SimpleList3 from "./components/SimpleList3";
export default {
  components: {
    // SimpleList
    // SimpleList2
    SimpleList3
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
