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
      list1: [],
      list2: [],
      option: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [],
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "expected",
            data: [],
            type: "line",
            smooth: true,
          },
          {
            name: "actual",
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
          // console.log(res);
          this.list = res.data.data.map((item) => {
            return item.date;
          });
          this.option.xAxis.data = this.list;
          this.list1 = res.data.data.map((item) => {
            return item.expected;
          });
          this.option.series[0].data = this.list1;
          this.list2 = res.data.data.map((item) => {
            return item.actual;
          });
          console.log(this.list3);
          this.option.series[1].data = this.list2;
          let chartDom = document.getElementById("main");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
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