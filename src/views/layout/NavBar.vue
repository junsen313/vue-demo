<template>
  <!-- iview中的menu组件,绑定on-select事件,进行路由切换  -->
  <Menu width="auto" :open-names="['1']" class="menu" @on-select="onMenuChange">
    <Submenu name="1">
        <template slot="title">
            <Icon type="ios-navigate"></Icon>
            导航一
        </template>
        <Menu-item name="/page1">页面 1</Menu-item>
        <Menu-item name="/page2">页面 2</Menu-item>
        <Menu-item name="/page3">页面 3</Menu-item>
    </Submenu>
    <Submenu name="2">
        <template slot="title">
            <Icon type="ios-keypad"></Icon>
            导航二
        </template>
        <Menu-item name="/page4">页面 4</Menu-item>
        <Menu-item name="/page5">页面 5</Menu-item>
    </Submenu>
    <Submenu name="3">
        <template slot="title">
            <Icon type="ios-analytics"></Icon>
            导航三
        </template>
        <Menu-item name="/page6">页面 6</Menu-item>
        <Menu-item name="/page7">页面 7</Menu-item>
    </Submenu>
  </Menu>
</template>
<script>
  export default {
    name: 'navbar',
    methods: {
      // 设置name跟路由中的路径一致，直接使用vue-router的函数式导航切换路由
      onMenuChange (name) {
        this.$router.push({path: name})
      }
    }
  }
</script>
<style scoped>
  .menu { height: 100%;}
</style>
