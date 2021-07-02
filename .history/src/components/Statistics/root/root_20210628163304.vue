<template>
  <div id="zhu"></div>
</template>

<script>
import lodash from "lodash";
import * as echarts from "echarts";
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      arr: null,
      arr1: [],
      x:[],
      y:[],
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
          data: [],
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
            data: [],
          },
          {
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "inside",
            },
            data: [1 , 2 , 3],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          // console.log(res);
          this.list = res.data.data;
          this.list.map((item) => {
            item.date = dayjs(item.date).format("YYYY年MM月DD日");
          });
         
          this.arr = lodash.groupBy(this.list, "date");
          for (let i in this.arr) {
            this.x.push(i),
            this.y.push(this.arr[i].length);
          }
          // x轴头部添加统计
          this.x.unshift('总计');
          this.option.xAxis.data=this.x,

          this.y.unshift(this.list.length)
          this.option.series[1].data=this.y

           console.log(this.y);
          let chartDom = document.getElementById("zhu");
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
#zhu {
  width: 100%;
  height: 400px;
  background-color: skyblue;
}
</style>