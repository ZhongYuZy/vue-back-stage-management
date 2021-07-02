<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="名称" width="380" align="center"> </el-table-column>
    <el-table-column prop="name" label="商品编码" width="380" align="center"> </el-table-column>
    <el-table-column prop="address" label="原价" width="380" align="center"> </el-table-column>
     <el-table-column prop="name" label="现价" width="380" align="center"> </el-table-column>
      <el-table-column prop="name" label="操作"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>
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