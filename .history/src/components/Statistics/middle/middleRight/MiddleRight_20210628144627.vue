<template>
  <div id="bing"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  props: {},
  data() {
    return {
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
              { value: 40, name: "rose 1" },
            
            ],
          },
        ],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {
    let chartDom = document.getElementById("bing");
    let myChart = echarts.init(chartDom);
    let option;

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