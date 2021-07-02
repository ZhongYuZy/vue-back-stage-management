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
        <el-button type="primary" class="btn" @click="onclick"
          >立即注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name: "",
  props: {},
  data() {
    let username = (rule, value, callback) => {
      if ((/[\u4E00-\u9FA5]/g.test(value))) {
        return callback(new Error("用户名不能为中文"));
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
          {
            validator: username,
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
            message: "密码在6-15位之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    onclick() {
      console.log(11);
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      //     this.$message.success("注册成功");
      //     axios.post('/api/user/register',{
      //       username:this.ruleForm.username,
      //       password:this.ruleForm.password,
      //     }).then((res) => {
      //       console.log(res);
      //       this.$router.push('/Sign')
      //     }).catch((err) => {
      //       console.log('请求失败',err);
      //     })
      //   }
      // });
    },
  },
  mounted() {
    this.getData
  },
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