<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <products></products>
      <product-details></product-details>
    </div>
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";
import ProductDetails from "./ProductDetails.vue";
import myHeader from "./Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    myHeader,
    products: ProductsList,
    ProductDetails
  }
};
</script>

<style>
.container {
  display: flex;
  align-items: flex-start;
}
</style>
