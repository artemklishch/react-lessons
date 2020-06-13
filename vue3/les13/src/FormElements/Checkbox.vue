<template>
  <div>
    <input type="checkbox" v-model="model" @change="$emit('input', model)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: false
    };
  }
};
</script>