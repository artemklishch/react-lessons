<template>
  <div>
    <div v-for="(field, key) in config" :key="key">
      <label>{{field.label}}</label>
      <component
        :is="field.type"
        :name="field.name"
        :patams="field.patams"
        @input="updateField(field.name, $event)"
        v-validate="field.validation"
        :data-vv-as="field.label"
      ></component>
      <span>{{error.first(field.name)}}</span>
    </div>
    <div>
      <button type="submit" :disabled="disabled">SUBMIT</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ["config"],
  data() {
    return {
      formValues: {}
    };
  },
  created() {
    this.config.map(f => {
      Vue.set(this.formValues, f.name, null);
    });
  },
  computed: {
    disabled() {
      return Object.keys(this.fields).some(key => this.fields[key].invalid);
    }
  }
};
</script>
