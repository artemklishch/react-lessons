<template>
  <div class="container">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
import { storeMutations } from "../store/store";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    save() {
      storeMutations.setName(this.name);
    },
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  height: 50px;
  background-color: rgb(144, 207, 207);
  margin-bottom: 10px;
  vertical-align: middle;
  padding-top: 10px;
}
</style>
