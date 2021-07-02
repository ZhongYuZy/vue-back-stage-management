<template>
  <div id="bin" style="width: 500px; height: 400px"></div>
</template>

<script>
import axios from "axios";
import * as echarts from 'echarts/core';
import {
    ToolboxComponent,
    LegendComponent
} from 'echarts/components';
import {
    PieChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [ToolboxComponent, LegendComponent, PieChart, CanvasRenderer]
);
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      arr1: [],
      option: {
        legend: {},
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
            data: [],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/ringChat")
        .then((res) => {
          console.log(res);
          this.this.option.series.data = res.data.data.map((item) => {
            console.log(item)
            return {
              name : item.name,
              value : item.value,
            }
          });
          
          console.log(this.this.option.series.data.value);
          console.log(this.arr1);
          let chartDom = document.getElementById("bin");
          let myChart = echarts.init(chartDom);
          myChart.setOption(option);
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