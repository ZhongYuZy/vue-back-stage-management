<template>
  <div class="middle"></div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    
    getData() {
      axios.get('/api/homeChat').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log('请求成功' , err);
      })
    },
    
    //  // 基于准备好的dom，初始化echarts实例
    //     let myChart = echarts.init(document.getElementById('main'));

    //     // 指定图表的配置项和数据
    //     let option = {
    //         title: {
    //             text: 'ECharts 入门示例'
    //         },
    //         tooltip: {},
    //         legend: {
    //             data:['销量']
    //         },
    //         xAxis: {
    //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
// 中间的盒子
.middle {
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
</style>