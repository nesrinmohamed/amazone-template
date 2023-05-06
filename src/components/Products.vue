<template>
  <div class="container">
    <div class="allProducts">
      <div class="product" v-for="(product, i) in getProducts" :key="i">
        <div class="produuct-container">
        <div class="product-img">
            <img :src="require(`@/assets/imgs/${product.image}`)" alt="" />
        </div>
          <div class="product-name">
            <p>{{ product.name.slice(0 , 60) }}...</p>
          </div>
          <div class="product-price">
            <span> $</span>
            {{ product.price }}
          </div>
          <div class="product-buttton">
            <button class="btn-card" @click="addToCard(product)">add to card</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods:{
...mapActions(['addToCard'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/component/products';

</style>
