<template>
<div>

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
          GOODS_SERIAL_NUMBER: "",
          NAME: "",
          ORI_PRICE: "",
          PRESENT_PRICE: "",
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
          this.tableData = res.data.data.map((item) => {
            return {
              NAME: item.NAME,
              GOODS_SERIAL_NUMBER: item.GOODS_SERIAL_NUMBER,
              ORI_PRICE: item.ORI_PRICE,
              PRESENT_PRICE: item.PRESENT_PRICE,
            };
          });
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
      }
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