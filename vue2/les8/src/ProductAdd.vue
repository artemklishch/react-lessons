<template>
  <form>
    <fieldset>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="product.title"
          value="producttitle"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="text"
          id="price"
          class="form-control"
          v-model="product.price"
          value="product.price"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          class="form-control"
          v-model="product.qt"
          value="product.qt"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addProduct">
        Submit
      </button>
    </fieldset>
  </form>
</template>

<script>
import ProductService from "./ProductService";

export default {
  data() {
    return {
      product: {}
    };
  },
  methods: {
    addProduct() {
      ProductService.addProduct(
        this.product.title,
        this.product.price,
        this.product.qt
      );
    }
  }
};
</script>

<style scoped></style>
