<template>
  <div>
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label=Order_No width="500px" align="center">
        </el-table-column>
        <el-table-column prop="name" label=price width="300px" align="center">
        </el-table-column>
        <el-table-column prop="address" label=status  width="200px" align="center"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
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
};
</script>


<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/orderData")
        .then((res) => {
          console.log(res);
          this.tableData=res.data.data.map((item) => {
              return
          })
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