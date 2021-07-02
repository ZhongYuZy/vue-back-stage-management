<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="名称" width="320" align="center"> </el-table-column>
    <el-table-column prop="name" label="商品编码" width="320" align="center"> </el-table-column>
    <el-table-column prop="address" label="原价" width="320" align="center"> </el-table-column>
     <el-table-column prop="name" label="现价" width="350" align="center"> </el-table-column>
      <el-table-column prop="name" label="操作" width="320" align="center"> </el-table-column>
  </el-table>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
z
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