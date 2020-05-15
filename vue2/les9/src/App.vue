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
      <div>
        <span @click="mode = mode === 'view' ? 'add' : 'view'">{{ mode }}</span>
        <keep-alive>
          <component :is="componentName"></component>
        </keep-alive>
        <!-- <component :is="componentName"></component> -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";
import ProductDetails from "./ProductDetails.vue";
import myHeader from "./Header.vue";
import ProductAdd from "./ProductAdd";
export default {
  data() {
    return {
      secondPart: "Second part",
      mode: "view"
    };
  },
  computed: {
    componentName() {
      return this.mode === "view" ? "ProductDetails" : "ProductAdd";
    }
  },
  components: {
    myHeader,
    ProductAdd,
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
