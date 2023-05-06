<template>
  <div class="banner">
<div class="banner-text">
        <h1>Shop sport and outdoor</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.banner{
  background: url('@/assets/imgs/banner.jpg') no-repeat ;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  .banner-text{
    h1{
        color: #000;
        font-size: 30px;
    }
  }  
}

</style>