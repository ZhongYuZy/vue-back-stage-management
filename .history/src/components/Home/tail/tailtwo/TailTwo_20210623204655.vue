<template>
  <div id="bin" style="width: 500px; height: 400px"></div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts';
export default {
  name: "",
  props: {},
  data() {
    return {
       option{
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
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
          ],
        },
      ],
    }
    };
  },
  components: {},
  methods: {
    getData(){
        axios.get('/api/ringChat').then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log('请求失败', err);
        })
    }
  },
  mounted() {
    let chartDom = document.getElementById("bin");
    let myChart = echarts.init(chartDom);
    let option;
   
    option && myChart.setOption(option);
    this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>