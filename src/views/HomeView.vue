<template>
  <div class="home">
<BannerView />
<Products />
  </div>
</template>

<script>
import Products from '@/components/Products.vue';
import BannerView from './BannerView.vue';

// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    Products,
    BannerView
}
}
</script>
