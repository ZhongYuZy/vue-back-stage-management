<template>
  <div>
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column
          prop="date"
          label="Order_No"
          width="500px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="name" label="price" width="300px" align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="status"
          width="200px"
          align="center"
        >
          <template>
            <div>
              <el-tag type="success">success</el-tag>
            </div>
            <div>
              <el-tag type="danger">pending</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
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
          name: [],
          address: "",
        },
      ],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/orderData")
        .then((res) => {
          //   console.log(res);
          this.tableData = res.data.data.map((item) => {
            item.price = "￥" + item.price;
            this.tableData[0].name.push(item.price);
            return {
              name: item.price,
              date: item.num,
              address: item.status,
            };
          });
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