<template>
  <div>
    <label v-for="(option, key) in options" :key="key">
      <input
        type="radio"
        :name="name"
        :value="option.value"
        @input="$emit('input', $event.target.value)"
      />
      {{option.label}}
    </label>
  </div>
</template>

<script>
export default {
  props: ["name", "params"],
  computed: {
    options() {
      return this.params.options;
    }
  }
};
</script>
