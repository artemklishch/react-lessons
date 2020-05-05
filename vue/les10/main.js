const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/Socks-Free-Download-PNG.png',
    url: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/',
    inStock: false,
    inNewStock: false,
    inventory: 20,
    onSale: true,
  },
});