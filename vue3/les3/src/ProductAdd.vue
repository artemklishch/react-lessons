<template>
  <form>
    <fieldset>
      <div class="form-group">
        <label for="title">Title {{ $route.query.text }}</label>
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
      fetch("https://crudcrud.com/api/6af163e15730410ea9518fd8bfecd205/products", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.product)
      })
      .then(res => this.$router.push("/"))
      .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped></style>
