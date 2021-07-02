<template>
  <div>
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
       <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/published">
          <i class="el-icon-menu"></i>
          <span slot="title">已发布</span>
        </el-menu-item>
        <el-menu-item index="/Statistics">
          <i class="el-icon-menu"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="/Articel">
          <i class="el-icon-check"></i>
          <span slot="title">发表文章</span>
        </el-menu-item>
         <el-menu-item index="/Tab">
          <i class="el-icon-setting"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
         <el-menu-item index="/Excel">
          <i class="el-icon-setting"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
         <el-menu-item index="/Uploda">
          <i class="el-icon-setting"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
         <el-menu-item index="/System">
          <i class="el-icon-delete"></i>
          <span slot="title">退出系统</span>
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
.el-menu-item{
    padding: 0px 0px;
    width: 200px;
}
.el-menu-vertical-demo{
    position: absolute;
    top: 68px;
    bottom: 0px;
    left: 8px;
}
.el-menu{
height: 90%;
}
.el-aside{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
}
.el-col{
    height: 100%;
}
.el-col-12{
    height: 100%;
}
</style>