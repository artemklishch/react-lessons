<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ index }} {{ product.title }}</h4>
      <p class="card-text">{{ product.qt }} items for ${{ product.price }}</p>
      <button class="btn btn-primary" @click="viewDetailsClicked">
        View Details
      </button>
    </div>
  </div>
</template>

<script>
import ProductService from "./ProductService";
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  methods: {
    viewDetailsClicked() {
      // ProductService.viewDetails(this.product.id);
      // this.$router.push("/details/"+this.product.id);
      this.$router.push({
        name: "product-details",
        params: { id: this.product.id }
      });
    }
  }
};
</script>

<style>
div.card {
  width: 500px;
  border: 1px solid red;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
