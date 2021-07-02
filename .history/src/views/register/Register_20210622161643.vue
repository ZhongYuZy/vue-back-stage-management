<template>
   <div id="app">
    <div class="sign">
      <div class="deng">登录</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="username">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
        </div>
        <div class="password">
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
        </div>
        <div class="repassword">
          <el-form-item label="确认密码" prop="repassword">
            <el-input v-model="ruleForm.repassword" show-password class="ipt"></el-input>
          </el-form-item>
          <div class="Code">验证码</div>
        </div>
      </el-form>
      <div class="bun">
        <el-button type="primary">登录成功</el-button>
        <el-button type="primary" class="btn">立即注册</el-button>
      </div>
    </div>
  </div>q
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>