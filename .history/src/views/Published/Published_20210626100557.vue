<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="#" width="180"> </el-table-column>
      <el-table-column prop="name" label="标题" width="180"> </el-table-column>
      <el-table-column prop="address" label="作者"> </el-table-column>
      <el-table-column prop="date" label="类目" width="180"> </el-table-column>
      <el-table-column prop="date" label="来源" width="180"> </el-table-column>
      <el-table-column prop="date" label="重要性" width="180"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
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
</style>