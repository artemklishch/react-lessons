const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    url: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/',
    details: ['80% cotton', '20% poliestr', 'Gender-natural'],
    onSale: false,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/Socks-Free-Download-PNG.png',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/Socks-PNG-File.png',
        variantQuantity: 0,
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
      this.onSale = !this.onSale
      console.log(index)
    }
  },
  computed:{
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
});