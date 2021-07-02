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
      option: {
        legend: {
          data: [],
        },
        radar: [
          {
            indicator: [
              { text: "sales" },
              { text: "ministration" },
              { text: "technology" },
              { text: "marketing" },
              { text: "delelopment" },
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
            axisLine: {
              lineStyle: {
                color: "rgb(192,192,192)",
                width: 1,
                tybe: "solid",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgb(192,192,192)",
              },
            },
          },
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [],
                name: "",
              },
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
          // console.log(res.data.data);
          // 标题
          let name = res.data.data.map((item) => {
            return item.name;
          });
          this.option.legend.data = name;
          // console.log("name", this.option.legend.data);
          
          let arr1 = res.data.data[0];
          let list1 = Object.values(arr1);
          let Budget = list1.slice(1, list1.length);
          // console.log(Budget);
          this.option.series[0].data[0].value = Budget;
          this.option.series[0].data[0].name = name[0];
          // console.log("1", this.option.series[0].data[0].value);
          
          let arr2 = res.data.data[1];
          let list2 = Object.values(arr2);
          let Expected = list2.slice(1, list1.length);
          // console.log(Expected);
          this.option.series[0].data[1].value = Expected;
          this.option.series[0].data[1].name = name[1];
          // console.log("2", this.option.series[0].data[1].value);
          
          let arr3 = res.data.data[2];
          let list3 = Object.values(arr3);
          let Actual = list3.slice(1, list1.length);
          // console.log(Actual);
          this.option.series[0].data[2].value = Actual;
          this.option.series[0].data[2].name = name[2];
          console.log("3", this.option.series[0].data[2].value);

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
// #lei {
//   position: relative;
//   bottom: -80px;
// }
</style>