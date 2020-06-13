<template>
  <div class="hello">
    <div>
      <h1>{{getStatus()}}</h1>
      <button @click="execute">Execute Operation</button>
    </div>
    <div>
      <h1>{{getUser()}}</h1>
      <button @click="authenticate">Authenticate</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapGetters(["getStatus", "getUser"]),
    execute() {
      this.$store.dispatch("EXECUTE_OPERATION");
    },
    authenticate() {
      this.$store.dispatch("AUTHENTICATION");
    }
  }
};
</script>