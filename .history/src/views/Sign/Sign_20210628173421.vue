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
        <div class="code">
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" class="ipt"></el-input>
          </el-form-item>
          <div class="Code" v-html="list" @click="tu"></div>
        </div>
      </el-form>
      <div class="bun">
        <el-button type="primary" @click="go">登录成功</el-button>
        <el-button type="primary" class="btn" @click="clickc"
          >立即注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    let username = (rule, value, callback) => {
      if (/[\u4E00-\u9FA5]/g.test(value)) {
        return callback(new Error("用户名不能为中文"));
      } else {
        return callback();
      }
    };
    return {
      list: "",
      ruleForm: { username: "", password: "", code: "" },
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
            message: "密码在2-6位之间",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/captcha")
        .then((res) => {
          // console.log(res);
          this.list = res.data;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    tu() {
      this.getData();
    },
    clickc() {
      this.$router.push("/Register");
    },
    go() {
      axios
        .post("/api/user/login", {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          code: this.ruleForm.code,
        })
        .then((res) => {
          console.log(res.data);
            if ((res.data.code === 200)) {
              console.log(res);
              localStorage.setItem("username", res.data.data[0].username),
               localStorage.setItem("time", res.headers.date)
              this.$message.success("登录成功");
               this.$router.push("/");
            } else {
              this.$message.error(res.data.message);
              return;
            }
        }).catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.getData();
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
  width: 600px;
  height: 400px;
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
.code {
  display: flex;
}
.ipt {
  width: 150px;
}
.Code {
  margin: 0 0 0 10px;
  width: 150px;
  height: 50px;
  background-color: pink;
}
</style>