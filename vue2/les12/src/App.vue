<template>
  <div>
    <my-header>
      <h1>Routing in Vue.js</h1>
    </my-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myHeader from "./Header.vue";

export default {
  data() {
    return {
      secondPart: "Second part",
      mode: "view"
    };
  },
  computed: {
    componentName() {
      return this.mode === "view" ? "ProductDetails" : "ProductAdd";
    }
  },
  components: {
    myHeader
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
}
h2 {
  color: red;
}
</style>
