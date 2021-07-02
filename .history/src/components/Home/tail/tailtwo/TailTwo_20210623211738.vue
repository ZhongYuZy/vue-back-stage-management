<template>
  <div id="bin" style="width: 500px; height: 400px"></div>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      arr1: [],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/ringChat")
        .then((res) => {
          console.log(res);
          this.arr = res.data.data.map((item) => {
            return item.name;
          });
          this.option.series[0].data.value = this.arr;
          this.arr1 = res.data.data.map((item) => {
            return item.data;
          });
          this.option.series[0].data.name = this.arr1;
          console.log(this.arr);
          console.log(this.arr1);
         
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