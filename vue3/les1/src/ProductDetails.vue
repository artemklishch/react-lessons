<template>
  <div class="product">
    <h2>Product Detail</h2>
    <form>
      <div>
        <label for="title">Title</label>
        <span>{{ product.title }}</span>
      </div>
      <div>
        <label for="price">Price</label>
        <span>${{ product.price }}</span>
      </div>
      <div>
        <label for="qt">Quantity</label>
        <span>{{ product.qt }}</span>
      </div>
      {{ this.counter }}
    </form>
    <!-- <router-link to='/details/2'>go to product 2</router-link> -->
    <router-link :to="{name: 'home'}">go to list</router-link>
  </div>
</template>

<script>
import ProductService from "./ProductService";
export default {
  props: ['staticText'],
  data() {
    return {
      product: {},
      counter: 0,
      leakyReference: null
    };
  },
  created() {
    ProductService.$on("viewDetails", selectedProduct => {
      this.product = selectedProduct;
    });
  },
  mounted() {
    ProductService.viewDetails(this.$route.params.id);
  },
  watch: {
    "$route.params.id"(id) {
      ProductService.viewDetails(id);
    }
  }
};
</script>

<style scoped>
.product {
  width: 500px;
  border: 1px solid red;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
