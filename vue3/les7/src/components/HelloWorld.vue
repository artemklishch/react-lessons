<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="execute">Execute operation</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: "waiting"
    };
  },
  computed: {
    ...mapState(["status"])
  },
  methods: {
    execute() {
      this.$store.dispatch("EXECUTE_OPERATION");
    }
  },
  // 1 watch in component
  // watch: {
  //   status(newValue, oldValue) {
  //     if (newValue === "ok") {
  //       this.msg = "Operation completed... doing something important";
  //     }
  //   }
  // }
  // 2 watch in store
  // mounted() {
  //   this.$store.watch(
  //     (state, getters) => state.status,
  //     (newValue, oldValue) => {
  //       if (newValue === "ok") {
  //         this.msg = "Operation completed... doing something important";
  //       }
  //     }
  //   );
  // }
  // 3 subscribe for mutation/action
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "UPDATE_STATUS":
          const status = state.status;
          if (status === "ok") this.msg = "Operation completed... doing something important";
          break;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
