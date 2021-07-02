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
    getData(){
      axios.get()
    }
  },
  mounted() {
    let chartDom = document.getElementById("bing");
    let myChart = echarts.init(chartDom);
    myChart.setOption(option);
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