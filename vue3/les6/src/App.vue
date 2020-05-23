<template>
  <div id="app">
    <div
      v-for="(url, i) in urls"
      :key="i"
      style="width:800px; height:400px; margin-bottom:5px"
    >
      <img
        v-lazyload
        :data-src="url"
        width="800px"
        height="400px"
        :alt="'image' + i"
      />
    </div>
  </div>
</template>

<script>
import lazyload from "./directives/lazyload";
export default {
  name: "app",
  data() {
    return {
      urls: [
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=1",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=2",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=3",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=4",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=5",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=6",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=7",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=8",
        "https://cdn.eso.org/images/thumb300y/eso1322a.jpg?token=9",
      ],
    };
  },
  directives: {
    lazyload,
  },
};
</script>
