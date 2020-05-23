<template>
  <div class="hello">
    <input type="checkbox" v-model="loadFirst" /> Load first Component
    <!-- <Comp1 v-if="loadFirst"></Comp1>
    <Comp2 v-else></Comp2> -->
    <component :is="componentName"></component>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      loadFirst: true,
    };
  },
  computed: {
    componentName() {
      const name = this.loadFirst ? "Comp1" : "Comp2";
      return () => import(`./${name}`);
    },
  },
};
</script>
