<template>
  <div>
    <my-header></my-header>
    <div>
      <greetings></greetings>
      <greetings></greetings>
    </div>
  </div>
</template>

<script>
import Greetings from "./Greetings";
import Header from "./Header";
export default {
  components: {
    Greetings,
    "my-header": Header
  }
};
</script>

