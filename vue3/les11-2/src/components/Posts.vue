<template>
  <div>
    <div class="card" v-for="post in posts" :key="post.id">
      <div slot="header" class="card-body">
        <span class="card-text">{{ posts.title }}</span>
        <button @click="navigateToComments(post)" class="card-link">Card link</button>
      </div>
      {{ post.body }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    navigateToComments(post) {
      this.$router.push({ name: "comments", params: { postId: post.id } });
    }
  },
  // mounted() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(res => this.posts = res);
  // },
  beforeRouteEnter(to, from, next) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(res => {
        next(vm => vm.posts = res);
      });
  }
  // beforeRouteLeave(to, from, next) {
  //   window.confirm("Do you really want to leave this page?")
  //     ? next()
  //     : next(false);
  // }
  // beforeRouteUpdate(to, from, next){}
};
</script>
