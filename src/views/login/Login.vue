<template>
  <div class="login-container">
    <Row class="login-box">
      <h1 class="title">后台管理系统</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username" size="large">
          <Icon type="ios-person-outline" slot="prepend" size="30px"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password" size="large">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formInline')" size="large" long>登录</Button>
        </Form-item>
      </Form>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      var me = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success({
            content: '登录成功',
            onClose () {
              me.$router.push({path: '/home'})
            }
          })
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>
<style scoped>
.login-container {
  position: relative;
  height: 100%;
  background: #80848f;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 400px;
  height: 300px;
  padding: 20px 40px;
  background: #fff;
  border-radius: 5px;
}
.title {
  padding: 20px 0;
  text-align: center;
}
</style>

