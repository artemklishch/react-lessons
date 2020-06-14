<template>
  <div class="col">
    <div class="row wrapper">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form";
export default {
  components: {
    Form
  },

};
</script>

<style>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
