<template>
  <div>
    <el-container>
      <el-header>
        <!-- 头部左边 -->
        <head-left>欢迎lp来到小爱后台管理系统</head-left>
        <!-- 头部右边 -->
        <head-right>早上好，亲爱的lp  上次登录时间：2019年7月02日9时58分55秒</head-right>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header{
 justify-content: ; 
}
</style>