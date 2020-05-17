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
        <tr v-for="(product, index) in items">
          <th scope="row">{{ product.title }}</th>
          <td>{{ product.price }}</td>
          <td>{{ product.qt }}</td>
          <td>
            <!-- <template slot-scope="scope">
              <button @click.native.prevent="$emit("deleteItem", scope.$index, "deleteProduct")">Remove</button>
            </template> -->
            <button @click="func(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      header: "Header"
    };
  },
  methods: {
    func(index) {
      this.$emit("deleteItem", index, "deleteProduct");
    }
  }
};
</script>
