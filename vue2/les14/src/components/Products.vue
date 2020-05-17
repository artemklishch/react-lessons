<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ header }}</h2>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in items">
          <th scope="row">{{ product.title }}</th>
          <td>{{ product.price }}</td>
          <td>{{ product.qt }}</td>
          <td>Remove</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import service from "../service";
import list from "../mixins/list";

export default {
  mixins: [list],
  data() {
    return {
      header: "Header",
      listName: "products"
    };
  },
  methods: {
    deleteProduct(index) {
      return service.deleteProduct(index);
    }
  }
};
</script>
