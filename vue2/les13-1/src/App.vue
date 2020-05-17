<template>
  <div class="row">
    <div class="col">
      <Users></Users>
    </div>
    <div class="col">
      <Products></Products>
    </div>
  </div>
</template>

<script>
import Users from "./components/Users";
import Products from "./components/Products";

export default {
  data() {
    return {};
  },
  components: {
    Users,
    Products
  }
};
</script>

<style scoped>
.col {
  border: 1px solid black;
  padding: 0;
}
</style>
