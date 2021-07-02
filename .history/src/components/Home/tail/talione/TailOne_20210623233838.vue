<template>
  <div id="lei" style="width: 500px; height: 400px"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      name: [],
      option: {
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "销售（Sales）" },
            { name: "管理（Administration）" },
            { name: "信息技术（Information Technology）" },
            { name: "客服（Customer Support）" },
            { name: "研发（Development）" },
            { name: "市场（Marketing）" },
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
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/radarChat")
        .then((res) => {
          this.name = res.data.data.map((item) => {
            return item.name;
          });
          this.option.legend.data = this.name;

          console.log(res);
          let chartDom = document.getElementById("main");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
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