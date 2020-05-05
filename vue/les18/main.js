Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template:
    `
    <div class='product'>
      <div class="product-image">
        <img :src="image" alt="">
      </div>
      <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping is {{shipping}}</p>
      <p>Premium is {{premium}}</p>
  
      <ul>
        <li v-for='detail in details'>{{detail}}</li>
      </ul>

      <div 
        v-for='(variant, index) in variants' 
        :key="variant.variantId" 
        class="color-box"
        :style="{backgroundColor: variant.variantColor}" 
        @mouseover="updateProduct(index)"
      >
      </div>

      <button v-on:click="addToCart" 
        :disabled="!inStock" 
        :class="{disabledButton: !inStock}"
      >
        Add to Cart
      </button>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
          <p>{{review.estimate}}</p>
          </li>
        </ul>
       </div>

      <product-review @review-submited="addReview"></product-review>

      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% poliestr', 'Gender-natural'],
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
      reviews: [],
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart: function () {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    },
    addReview(productReview) {
      this.reviews.push(productReview)
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    },
  }
})


Vue.component('product-review', {
  template:
    `
      <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>
      </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        Would you recomend this product?
        <div>
          <label for="yes">yes</label>
          <input type="radio" id="yes" name="estimate" value="Recomended" v-model="estimate">
          <label for="no">no</label>
          <input type="radio" id="no" name="estimate" value="No recomended" v-model="estimate">
        </div>
        <p>Recomended or no: {{estimate}}</p>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
      estimate: null,
    }
  },
  methods: {
    estimate(){
      return false
    },
    onSubmit() {
      this.errors = []
      if (this.name && this.review && this.rating && this.estimate) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          estimate: this.estimate,
        }
        this.$emit('review-submited', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.estimate = null
      } else {
        if (!this.name) this.errors.push('Name required')
        if (!this.review) this.errors.push('Review required')
        if (!this.rating) this.errors.push('Rating required')
        if (!this.estimate) this.errors.push('Estimate please!')
      }

    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
  }
});

