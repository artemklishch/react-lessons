<template>
  <div>
    <h1>Countries</h1>
    <div class="hello">
      <Child1></Child1>
    </div>
  </div>
</template>

<script>
import Child1 from "./Child1";
export default {
  components: {
    Child1
  }
};
</script>

<style scoped>
.hello {
  background-color: lightblue;
}
</style>