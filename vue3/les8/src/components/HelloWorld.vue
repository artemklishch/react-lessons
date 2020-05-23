<template>
  <div class="wrapper">
    <h1>{{ createdOn }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createdOn: "",
    };
  },
  methods: {
    init() {
      this.createdOn = new Date();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.wrapper {
  width: 600px;
  height: 100px;
  background-color: rgb(144, 207, 207);
  margin-bottom: 10px;
}
</style>
