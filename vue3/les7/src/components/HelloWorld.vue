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
  watch: {
    status(newValue, oldValue) {
      if (newValue === "ok") {
        this.msg = "Operation completed... doing something important";
      }
    }
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
