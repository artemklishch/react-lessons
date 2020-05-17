<template>
  <el-card>
    <div slot="header" class="clearFix">
      <h2>{{ header }}</h2>
    </div>
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="price" label="Price" width="180"></el-table-column>
      <el-table-column prop="qt" label="Quantity"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteProduct(scope.$index)"
            type="text"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import service from "../service";

export default {
  data() {
    return {
      products: [],
      header: "Header"
    };
  },
  created() {
    this.products = service.products;
  },
  methods: {
    deleteProduct(index) {
      return service.deleteProduct(index);
    }
  }
};
</script>
<style scoped></style>
