<template>
  <div id="bing"></div>
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
    var chartDom = document.getElementById("bing");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
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
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" },
          ],
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
#bing {
  flex: 1;
  height: 470px;
  background-color: yellow;
}
</style>