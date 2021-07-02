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
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    let repassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("重复密码不能为空"));
      } else if (value.length < 6 || value.length > 15) {
        return callback(new Error("密码在6-15位之间"));
      } else if (value !== this.ruleForm.password) {
        return callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: { username: "", password: "", repassword: "" },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            min: 2,
            max: 6,
            message: "用户名在2-6位之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "密码在2-6位之间",
            trigger: "blur",
          },
        ],
        repassword: [
          {
            validator: repassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 920px;
  background-color: skyblue;
}
.el-input {
  width: 300px;
}
.sign {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  background-color: #fff;
}
.bun {
  display: flex;
}
.btn {
  margin: 0 0 0 60px;
}
.deng{
    margin: 0 0 10px 50px;
}
.repassword{
    display: flex;
}
.ipt{
    width: 150px;
}
.Code{
    margin: 0 0 0 5px;
    width: 150px;
    height: 50px;
    background-color: pink;
}
</style>