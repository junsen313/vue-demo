<template>
  <div id="app">
    <layout>
      <!-- 内容分发,router-view替换layout中solt  -->
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import Layout from './views/layout/Layout'

export default {
  name: 'app',
  components: {Layout},       // 注册组件
  methods: {
  }
}
</script>

<style>
  html,body,#app {
    height: 100%;
  }
</style>
