<template>
  <div class="hello">
    <h1>Dinamic Form</h1>
    <FormBuilder :config="formConfig"></FormBuilder>
  </div>
</template>

<script>
import Config from "../config/form.json";
import FormBuilder from "./FormBuilder";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    formConfig() {
      return Config;
    }
  },
  components: {
    FormBuilder
  }
};
</script>
