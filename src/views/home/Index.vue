<template>
  <div>
    <h1>这里是首页</h1>
    <!--iview组件  -->
    <Carousel v-model="value1">
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: 0
      }
    }
  }
</script>
<style scoped>
  .demo-carousel {
    height: 400px;
    line-height: 400px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
  }
</style>

