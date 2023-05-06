<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-container">
        <div class="nav-left">
        <router-link :to="{name:'home'}">  <img src="@/assets/imgs/log.png" alt="" /></router-link>
        </div>
        <div class="nav-right">
          <li>
            <router-link :to="{name: 'cart'}"
              ><i class="fa-solid fa-cart-plus"></i>
              <span class="cart-items">{{items}}</span></router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['items' , 'getCard'])
  }
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 70px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  .nav-container {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-left {
      img {
        width: 110px;
      }
    }
    .nav-right {
      li a {
        color: #fff;
        font-size: 20px;
        position: relative;

        span {
          position: absolute;
          top: -17px;
          right: -24px;
          width: 25px;
          height: 25px;
          background:  #f08804;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
