<template>
  <div>
    <el-col :span="12">
      <h5>自定义颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
       <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">已发布</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-check"></i>
          <span slot="title">发表文章</span>
        </el-menu-item>
         <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
         <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
         <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
         <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>