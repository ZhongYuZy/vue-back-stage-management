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
      list:[]
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/homeChat")
        .then((res) => {
          console.log(res);
          this.list=res.data.data.map(item = )
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求成功", err);
        });
    },
  },
  mounted() {
    let chartDom = document.getElementById("main");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      tooltip: {},
      legend: {
        data: ["expected"],
      },
      xAxis: {
        type: "category",
        data:[]
      },
      yAxis: {
        type: "value",
        legend: {
          data: ["expected"],
        },
      },
      series: [
        {
          data: [141, 222, 41, 91, 221, 83, 188],
          type: "line",
          smooth: true,
        },
      ],
    };
    option && myChart.setOption(option);
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