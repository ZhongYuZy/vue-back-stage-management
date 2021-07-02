<template>
  <div id="app">
    <div></div>
    <div v-for="(item, index) in arr" :key="index" class="ipt">
      <input type="checkbox" class="ipu" />
      <div class="option">
        <div>
          {{ item }}
        </div>
        <div class="el-icon-close" @click="onclick"></div>
      </div>
    </div>
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="6 itme left" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="All" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="Active" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="copmleted" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: ["Vue", "工具类", "性能优化", "root", "其他", "java", "javaspcirt"],
      activeName: "buttom",
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    onclick() {
      this.arr = this.arr.map((item , index) => {
        return !index
      });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  width: 400px;
  height: 510px;
  background-color: #fff;
}
.option {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.ipt {
  display: flex;
  margin: 25px 0 35px 0;
}
.el-icon-close {
  display: none;
}
.ipt:hover {
  .el-icon-close {
    display: block;
  }
}
.ipu {
  margin: 0 20px 0 20px;
}
</style>