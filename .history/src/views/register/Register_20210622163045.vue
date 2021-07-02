<template>
  <div id="app">
    <div class="sign">
      <div class="deng">注册</div>
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
      </el-form>
      <div class="bun">
        <el-button type="primary">立即登录</el-button>
        <el-button type="primary" class="btn" @click='click'>立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
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
      },
    };
  },
  components: {},
  methods: {
    v() {
      this.dialogVisible = true;
    },
    click() {
      // 判断表单是否通过了验证
      this.$refs.ruleForm.validate((valid) => {
        // valid是个布尔值 如果是true 就代表表单验证通过 false没用过
        if (valid) {
          // 验证通过
          // 登录的操作...
          this.$message.success("登录成功");
        } else {
          // $message: success成功 error失败 warning警告 info信息
          this.$message.error("表单填写有误,请检查");
          return;
        }
      });
    },
    edit(row) {
      console.log(row);
    },
  },
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
.deng {
  margin: 0 0 10px 50px;
}
.repassword {
  display: flex;
}
</style>