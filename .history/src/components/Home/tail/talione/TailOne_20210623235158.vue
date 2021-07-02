<template>
  <div id="lei" style="width: 400px; height: 350px"></div>
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
          data: [],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "sales", max: 200 },
            { name: "ministration", max: 200 },
            { name: "technology", max: 200 },
            { name: "marketing", max: 200 },
            { name: "delelopment", max: 200 },
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
          let chartDom = document.getElementById("lei");
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
#lei{
  position: absolute;
  
}
</style>