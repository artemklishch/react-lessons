<template>
  <div>
    <router-link to="/add?text=hi" class="btn btn-success"
      >Add Product</router-link
    >
    <ProductItem
      v-for="(product, i) in products"
      :key="product._id"
      :product="product"
      :index="i + 1"
    ></ProductItem>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductItem
  },
  created() {
    fetch("https://crudcrud.com/api/6af163e15730410ea9518fd8bfecd205/products")
      .then(response => response.json())
      .then(res => (this.products = res))
      .catch(error => console.log(error));
  },
  // updated() {
  //   fetch("https://crudcrud.com/api/516e623d99c94231a0387fa3c0391f2e/products")
  //     .then(response => response.json())
  //     .then(res => (this.products = res))
  //     .catch(error => console.log(error));
  // }
};
</script>
