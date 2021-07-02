<template>
  <div id="app">
      <div v-for="(item , index) in arr" :key='index' class="ipt">
          <input type="checkbox" class="ipu">
          {{item}}
      </div>
      <template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="6 itme left" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="All" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="Active" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="copmleted" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>
  


<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        arr:['Vue' , '工具类' , '性能优化' , 'root' , '其他' , 'java' , 'javaspcirt' , '类目' ]
    }
  },
  components: {},
  methods: {

  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#app{
    width: 400px;
    height: 510px;
    background-color: #fff;
}
.ipt{
    margin: 25px 0;
}
.ipu{
    margin: 0 20px 0 20px;
}
</style>