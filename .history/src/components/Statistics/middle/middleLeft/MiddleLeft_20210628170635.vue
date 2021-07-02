<template>
  <div id="Category"></div>
  111
</template>

<script>
import lodash from "lodash";
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      arr: null,
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
          let chartDom = document.getElementById("Category");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
      this.getData
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#Category {
  flex: 1;
  height: 470px;
}
</style>