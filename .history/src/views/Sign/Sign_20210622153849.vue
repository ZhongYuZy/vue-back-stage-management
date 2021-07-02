<template>
  <div id='app'>
    <div class="sign">
        <div>登录</div>
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
            <el-input v-model="ruleForm.repassword" show-password></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      ruleForm: { username: "", password: "" },
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
#app{
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
.sign{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 500px;
    height: 300px;
    background-color: #fff;
}
</style>