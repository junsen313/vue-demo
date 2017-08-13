/**
* 这是一个布局组件，构建整体布局框架
* 引入一个公共头部(d-header)和底部(d-footer)组件
*/
<template>
  <div class="layout" >
      <d-header title="新版后台管理系统"></d-header>
      <Row class="layout-content">
          <i-col span="4" class="layout-left">
            <nav-bar></nav-bar>
          </i-col>
          <i-col span="20" class="layout-right">
              <div class="layout-content-main">
                <!--分容分发，layout中的内容站位 -->
                <slot></slot>
              </div>
          </i-col>
      </Row>
      <d-footer></d-footer>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import DHeader from './DHeader'
  import DFooter from './DFooter'
  export default {
    components: { NavBar, DHeader, DFooter },
    methods: {
    }
  }
</script>
<style scoped>
  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      height: 100%;
  }
  .layout-assistant{
      width: 300px;
      margin: 0 auto;
      height: inherit;
  }
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 200px;
      height: calc(100% - 138px);
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  .layout-content-main{
      padding: 10px;
  }
  .layout-left,.layout-right{
    height: 100%;
  }
</style>

