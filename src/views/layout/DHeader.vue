<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
      <!-- logo绑定点击事件，使用编程式导航切换路由到首页 -->
      <div class="layout-logo" @click="$router.push({path: '/'})">LOGO</div>
      <div class="layout-nav">
        <!-- 绑定应用标题  -->
        <h3>{{title}}</h3>
      </div>
  </Menu>
</template>
<script>
  export default {
    name: 'd-header',
    props: {                        // 接受属性title
      title: {
        type: String,               // 限定属性类型
        default: '后台管理系统'       // 设置属性默认值
      }
    }
  }
</script>
<style scoped>
  .layout-logo{
      width: 100px;
      height: 30px;
      line-height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
      text-align: center;
      color: #fff;
      cursor: pointer;
  }
  .layout-nav{
      width: 420px;
      margin: 0 auto;
      color: #fff;
      text-align: center;
  }
</style>

