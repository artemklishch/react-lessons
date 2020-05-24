import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Comments from "../components/Comments";
import Posts from "../components/Posts";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
      meta: { needsAuthorization: true },
      // beforeEnter(to, from, next) {
      //   if (store.state.isAuthorized) {
      //     next();
      //   } else next("/");
      // },
    },
    {
      path: "/comments/:postId",
      name: "comments",
      props: true,
      component: Comments,
      meta: { needsAuthorization: true },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (store.state.isAuthorized || to.name === "home") {
//     next();
//   } else next("/");
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.needsAuthorization)) {
    if (store.state.isAuthorized) {
      next();
    } else next("/");
  } else next();
});

// router.afterEach((to, from) => {
//   store.state.routerHistory.push(`From ${from.name} to ${to.name}`);
// });

export default router;
