<template>
  <div id="main"></div>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      list1:[],
      option: {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/homeChat")
        .then((res) => {
          console.log(res);
          this.list = res.data.data.map((item) => {
            return item.date;
          });
          this.option.xAxis.data = this.list;
          this.list1= res.data.data.map((item) => {
            return item.expected;
          });
          this.option.series.data = this.list1;
          let chartDom = document.getElementById("main");
          let myChart = echarts.init(chartDom);
          console.log(this.option);
          myChart.setOption(this.option);
          console.log(this.list1);
        })
        .catch((err) => {
          console.log("请求成功", err);
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
// 中间的盒子
#main {
  width: 1635px;
  height: 500px;
  background-color: #fff;
  margin: 0 7px;
}
</style>