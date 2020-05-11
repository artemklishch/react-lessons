import Vue from "vue";
import App from "./App.vue";

// const myGreetings = {
//   data: function() {
//     return {
//       name: "Max"
//     };
//   },
//   methods: {
//     changeName() {
//       this.name = this.name === "Max" ? "Julia" : "Max";
//     }
//   },
//   template:
//     "<h1>Hello {{name}} <button @click='changeName'>Not {{name}}?</button></h1>"
// };

// new Vue({
//   el: "#app",
//   components: {
//     myGreetings
//   },
//   // render: h => h(App)
//   template: "<div><myGreetings></myGreetings><my-greetings></my-greetings></div>"
// });

new Vue({
  el: "#app",
  render: h => h(App)
});
