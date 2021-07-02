<template>
  <div id="bing"></div>
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
            name: "面积模式",
            type: "pie",
            radius: [25, 150],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              // { value: 40, name: "rose 1" },
            ],
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
          // console.log(res);
          // this.list = res.data.data;
          this.arr = lodash.groupBy(this.list, "source");
          //   console.log(this.arr);
          for (let i in this.arr) {
            this.option.series[0].data.push({
              value: this.arr[i].length,
              name: i,
            });
          }
          let chartDom = document.getElementById("bing");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
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
#bing {
  flex: 1;
  height: 470px;
  background-color: yellow;
}
</style>