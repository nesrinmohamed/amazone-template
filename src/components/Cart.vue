<template>
    <div v-if="getCard.products.length > 0">
    <div class="cart container">
    <h3 style="font-weight: 600;" class="pt-3">Shopping Cart</h3>
    <hr />
    <div class="cart-item" v-for="(product , i) in getCard.products" :key="i" >
        <div class="cart-img">
            <img :src="require(`../assets/imgs/${product.image}`)" alt="">
        </div>
        <div class="cart-desc">
         <router-link to="/" > <p>{{product.name}}</p></router-link>
         <div class="row">
          <div class="col-6">
            <input type="number" class="quantity-num" v-model="product.quantity" @change="updateQuantityItem($event , product.id)">
            <!-- <select name="" class="select" id="select" v-model="product.quantity" @change="updateQuantityItem($event , product.id)">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select> -->
          </div>
          <div class="col-6">
            <button class="delete-btn" @click="deleteProduct(product.id)" >Delete </button>
          </div>
        </div>
        </div>
        <div class="cart-price">
            <span>$</span>{{product.price * product.quantity}} 
        </div>

    </div>
   </div>
    <div class="cart-total container d-flex align-items-ceter justify-content-between">
  <h2>Total</h2>
  <span class="fs-5 fw-600">$ {{getPrice}} </span>
</div>
</div>


  <div v-else>
    <div class="product-container">Your Cart Is Empty !</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCard" ,'getQuantites' , 'getPrice' ]),
  },
  methods:{
    ...mapActions(['updateQuantity' , 'deleteProduct']),
    updateQuantityItem(e , id){
      console.log('qty' , e.target.value , 'id' , id)
      this.updateQuantity({qty:e.target.value  , id})
    },
    getQuantitey(){
     const result =  this.getQuantitey()
     console.log(result)
    },
  },

};
</script>

<style>
</style>
