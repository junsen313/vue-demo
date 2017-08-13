<template>
  <div>
    <div class="box">
      <h1>这里是页面1</h1>
      <!-- 绑定click事件  -->
      <Button type="primary" @click="open(false)">打开提醒</Button>
      <Button @click="open(true)">打开提醒（仅标题）</Button>
      <Button type="primary" @click="info">显示普通提醒</Button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      // 调用iview中的提供的提示方法
      open (nodesc) {
        this.$Notice.open({
          title: '这是通知标题',
          desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
        })
      },
      info () {
        this.$Message.info('这是一条普通的提醒')
      }
    }
  }
</script>
<style scoped>

</style>

