<template>
  <div id="lei"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    let chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "销售（Sales）", max: 6500 },
          { name: "管理（Administration）", max: 16000 },
          { name: "信息技术（Information Technology）", max: 30000 },
          { name: "客服（Customer Support）", max: 38000 },
          { name: "研发（Development）", max: 52000 },
          { name: "市场（Marketing）", max: 25000 },
        ],
      },
      series: [
        {
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "预算分配（Allocated Budget）",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "实际开销（Actual Spending）",
            },
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
</style>