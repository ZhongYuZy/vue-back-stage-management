<template>
  <div>
    <el-container>
      <el-header>
        <!-- 头部左边 -->
        <head-left>欢迎</head-left>
        <!-- 头部右边 -->
        <head-right></head-right>
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
</style>