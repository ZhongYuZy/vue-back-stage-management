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
      lei: [],
      name: [],
      option: {
        legend: {
          data: [],
        },
        radar: {
          indicator: [
            { name: "sales", max: 200 },
            { name: "ministration", max: 200 },
            { name: "technology", max: 200 },
            { name: "marketing", max: 200 },
            { name: "delelopment", max: 200 },
          ],
          center: ["50%", "50%"],
          radius: 130,
          startAngle: 90,
          splitNumber: 5,
          shape: "circle",
          name: {
            formatter: "【{value}】",
            textStyle: {
              color: "rgb(192,192,192)",
            },
          },
          splitArea: {
            areaStyle: {
              color: ["#fff", "#ddd", "#fff", "#ddd", "#fff"],
              shadowColor: "rgb(192,192,192)",
              shadowBlur: 10,
            },
          },
        },
          axisLine: {
                            lineStyle: {
                                color: 'rgb(192,192,192)',
                                width: 1,
                                tybe: 'solid'
                            }
                        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [],
                name: "",
              },
              {
                value: [],
                name: "",
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
          this.lei = res.data.data.map((item) => {
            return item;
          });
          // console.log(this.lei);
          // console.log(res);
          let chartDom = document.getElementById("lei");
          let myChart = echarts.init(chartDom);
          myChart.setOption(this.option);
        })
        .catch((err) => {
          // console.log("请求失败", err);
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
#lei {
  position: relative;
  bottom: -80px;
}
</style>