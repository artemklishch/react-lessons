<template>
  <div class="container">
    <h1>Your name is {{ name }}</h1>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  computed: {
    name() {
      return store.name;
    },
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  height: 50px;
  background-color: rgb(109, 211, 163);
  margin-bottom: 10px;
  vertical-align: middle;
  padding-top: 10px;
}
</style>
