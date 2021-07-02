<template>
  <div id="zhu"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      zhu:[],
      option: {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData(){
      axios.get('/api/homeData').then((res) => {

      }).catch((err) => {
        
      })
    }
  },
  mounted() {
    let chartDom = document.getElementById("zhu");
    let myChart = echarts.init(chartDom);
    let option;

    option && myChart.setOption(option);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#zhu {
  width: 500px;
  height: 400px;
  background-color: #fff;
  margin: 0 7px;
  position: relative;
}
</style>