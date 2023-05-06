<template>
  <Nav />

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components:{
    Nav
  },
watch:{
  data(){
    localStorage.setItem('')
  }
}
}
</script>
<style lang="scss">

@import './assets/scss/main.css';
</style>
