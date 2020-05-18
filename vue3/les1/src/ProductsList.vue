<template>
  <div>
    <router-link to="/add?text=hi" class="btn btn-success"
      >Add Product</router-link
    >
    <ProductItem
      v-for="(product, i) in products"
      :key="product.id"
      :product="product"
      :index="i + 1"
    ></ProductItem>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import ProductService from "./ProductService";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters({
    products: "getProducts"
  }),
  // computed: {
  //   products() {
  //     // return this.$store.state.products;
  //     return this.$store.getters.getProducts;
  //   }
  // },
  components: {
    ProductItem
  },
  created() {
    // this.products = ProductService.products;
    // this.$store.commit("loadProducts", ProductService.products);
    this.$store.dispatch("loadProducts", ProductService.products);
  }
};
</script>
