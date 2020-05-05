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
        variantImage: './assets/Socks-Free-Download-PNG.png',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/Socks-PNG-File.png',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function(){
      this.cart += 1
    },
    decrementCart: function(){
      this.cart -= 1
    },
    updateProduct(variantImage){
      this.image = variantImage
    }
  },
});