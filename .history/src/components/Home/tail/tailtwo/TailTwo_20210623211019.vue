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
      value: [],
      name: [],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/ringChat")
        .then((res) => {
          console.log(res);
          this.value = res.data.data.map((item) => {
            return item.name;
          });
          this.name = res.data.data.map((item) => {
            return item.data;
          });
          console.log(this.value);
          console.log(this.name);
          let chartDom = document.getElementById("bin");
          let myChart = echarts.init(chartDom);
          let option;
          myChart.setOption(option);
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
            { value, name },
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