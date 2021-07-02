<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="名称" width="320" align="center">
    </el-table-column>
    <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编码" width="320" align="center">
    </el-table-column>
    <el-table-column prop="ORI_PRICE" label="原价" width="320" align="center">
    </el-table-column>
    <el-table-column prop="PRESENT_PRICE" label="现价" width="350" align="center">
    </el-table-column>
    <el-table-column prop="name" label="操作" width="320" align="center">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
       tableData: [
        {
          date: "",
          name: "",
          address: "",
        },
      ],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
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
</style>