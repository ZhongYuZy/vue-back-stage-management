<template>
  <div id="zhu"></div>
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
      option: {
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
            stack: "总量",
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
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "inside",
            },
            data: [2900, 1200, 300, 200, 900, 300],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData(){
      axios.get().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log('请求失败' , err);
      })
    }
  },
  mounted() {
    let chartDom = document.getElementById("zhu");
    let myChart = echarts.init(chartDom);

    myChart.setOption(this.option);
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