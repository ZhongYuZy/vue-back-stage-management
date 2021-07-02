<template>
  <div id="zhu"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      zhu: [],
      zhu1: [],
      zhu2:[],
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
            type: "bar",
          },
          {
            data: [],
            type: "bar",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then((res) => {
          console.log(res);
          this.zhu = res.data.data.map((item) => {
            return item.date;
          });
          this.option.xAxis.data = this.zhu;
          this.zhu1 = res.data.data.map((item) => {
            return item.expected;
          });
          this.option.series[0].data = this.zhu1;
          this.zhu2 = res.data.data.map((item) => {
            return item.actual;
          });
          this.option.series[1].data = this.zhu2;
           let chartDom = document.getElementById("zhu");
    let myChart = echarts.init(chartDom);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    let chartDom = document.getElementById("zhu");
    let myChart = echarts.init(chartDom);
    let option;

    option && myChart.setOption(option);
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#zhu {
  width: 500px;
  height: 400px;
  background-color: #fff;
  margin: 0 7px;
  position: relative;
}
</style>