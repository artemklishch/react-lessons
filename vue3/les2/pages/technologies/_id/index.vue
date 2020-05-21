<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <div>
    <h1>{{ tech.name }}</h1>
    {{ tech.description }}
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tech = context.store.state.technologies.find(
          t => t.id === parseInt(context.route.params.id)
        );
        resolve({ tech });
      }, 2000);
    });
  }
};
</script>
