<template>
  <div id="bin"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      arr: [],
      option: {
        legend: {
          top: "top",
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
        //   console.log(res);
          this.list = res.data.data;
          this.arr = lodash.groupBy(this.list, "category");
          console.log(this.arr);
          for (let i in this.arr) {
            this.option.series[0].data.push({
              value: this.arr[i].length,
              name: i,
            });
          }
          let chartDom = document.getElementById("bin");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#bin {
  flex: 1;
  height: 470px;
}
</style>