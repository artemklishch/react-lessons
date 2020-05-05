const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/Socks-Free-Download-PNG.png',
    url: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/',
    inStock: true,
    details: ['80% cotton', '20% poliestr', 'Gender-natural'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
      },
    ],
    sizes: [24, 45, 44],
  },
});