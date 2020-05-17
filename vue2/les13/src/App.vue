<template>
  <div>
    <center><h1>Vue.js Mixins</h1></center>
    <el-container>
      <el-main style="padding: 0px;">
        <el-row>
          <el-col :span="12">
            <users></users>
          </el-col>
          <el-col :span="12">
            <products></products>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import Users from "./components/Users.vue";
import Products from "./components/Products.vue";
Vue.use(ElementUI, { locale, size: "small" });
export default {
  data() {
    return {};
  },
  components: {
    users: Users,
    products: Products
  }
};
</script>
