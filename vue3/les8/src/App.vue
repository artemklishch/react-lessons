<template>
  <div id="app">
    <!-- <my-component v-if="renderMyComponent"></my-component> -->
    <!-- <my-component :key="renderKey"></my-component> -->
    <my-component :key="renderKey" ref="myComp"></my-component>
    <button @click="reRender">Re-render</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    "my-component": HelloWorld,
  },
  data() {
    return {
      // renderMyComponent: true,
      renderKey: 1,
    };
  },
  methods: {
    // reRender() {
    //   location.reload();
    // },
    // reRender() {
    //   this.renderMyComponent = false;
    //   this.$nextTick(() => {
    //     this.renderMyComponent = true;
    //   });
    // },
    // reRender() {
    //   this.renderKey++;
    // },
    reRender() {
      this.$refs["myComp"].init();
    },
  },
};
</script>
