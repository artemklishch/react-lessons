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
import appSection from "./components/appSection";

const sectionUsers = appSection(Users, "users");
const sectionProducts = appSection(Products, "products");

export default {
  data() {
    return {};
  },
  components: {
    Users: sectionUsers,
    Products: sectionProducts
  }
};
</script>

<style scoped>
.col {
  border: 1px solid black;
  padding: 0;
}
</style>
