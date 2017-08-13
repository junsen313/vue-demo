<template>
  <div id="app">
    <router-view></router-view>
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
