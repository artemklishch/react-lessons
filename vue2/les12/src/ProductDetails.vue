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
  </div>
</template>

<script>
import ProductService from "./ProductService";
export default {
  data() {
    return {
      product: {},
      counter: 0,
      leakyReference: null
    };
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
    setInterval(() => this.counter++, 1000);
    ProductService.$on("viewDetails", selectedProduct => {
      this.product = selectedProduct;
    });
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    // console.log("before update");
    console.log(this.counter);
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    this.leakyReference = null;
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
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
