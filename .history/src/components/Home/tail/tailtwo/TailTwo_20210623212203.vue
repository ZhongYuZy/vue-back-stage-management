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
          // this.option.series[0].data.value = this.arr;
          this.arr1 = res.data.data.map((item) => {
            return item.data;
          });
          // this.option.series[0].data.name = this.arr1;
          console.log(this.arr);
          console.log(this.arr1);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    let chartDom = document.getElementById("bin");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
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
            { value:this.arr, name:this.arr1 },
            // { value: 38, name: "rose 2" },
            // { value: 32, name: "rose 3" },
            // { value: 30, name: "rose 4" },
            // { value: 28, name: "rose 5" },
          ],
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
</style>