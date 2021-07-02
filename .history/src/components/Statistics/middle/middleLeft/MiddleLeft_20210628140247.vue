<template>
  <div id="box"></div>
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
    var chartDom = document.getElementById("box");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      legend: {
        top: "top",
      },
      series: [
        {
          type: "pie",
          radius: "25%",
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
#box {
  flex: 1;
  height: 470px;
  background-color: skyblue;
}
</style>