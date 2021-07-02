<template>
  <div id='app'>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="#" width="30"> </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="category" label="类目" width="180"> </el-table-column>
      <el-table-column prop="source" label="来源" width="180"> </el-table-column>
      <el-table-column prop="star" label="重要性" width="180"> </el-table-column>
      <el-table-column prop="date" label="发布时间" width="180"> </el-table-column>
      <el-table-column prop="作" label="操作" width="180"> </el-table-column>
    </el-table>
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
#app{
  width: 100%;
  
}
</style>