<template>
  <div>
    <my-header>
      <h1>Communication between components in Vue.js</h1>
      <span>{{ secondPart }}</span>
      <h2 slot="subtitle">Slots</h2>
      <span slot="subtitle">Slot - Second part</span>
    </my-header>
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
    return {
      secondPart: "Second part"
    };
  },
  components: {
    myHeader,
    products: ProductsList,
    ProductDetails
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
