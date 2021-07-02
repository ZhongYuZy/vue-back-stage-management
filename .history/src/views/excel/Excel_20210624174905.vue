<template>
  <div>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      stripe
      style="width: 100%"
    >
      <el-table-column prop="NAME" label="名称" width="320" align="center">
      </el-table-column>
      <el-table-column
        prop="GOODS_SERIAL_NUMBER"
        label="商品编码"
        width="320"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="320" align="center">
      </el-table-column>
      <el-table-column
        prop="PRESENT_PRICE"
        label="现价"
        width="350"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="320"
        align="center"
        class="btn"
      >
        <el-button type="primary">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: [],
    };
    currentPage
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.btn {
  display: flex;
}
</style>