<template>
  <div id="zhu"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    var chartDom = document.getElementById("zhu");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "数量",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
          var tar = params[1];
          return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        splitLine: { show: false },
        data: ["总费用", "房租", "水电费", "交通费", "伙食费", "日用品数"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
          },
          data: [0, 1700, 1400, 1200, 300, 0],
        },
        {
          name: "生活费",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "inside",
          },
          data: [2900, 1200, 300, 200, 900, 300],
        },
      ],
    };

    option && myChart.setOption(option);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#zhu {
  width: 100%;
  height: 400px;
  background-color: skyblue;
}
</style>