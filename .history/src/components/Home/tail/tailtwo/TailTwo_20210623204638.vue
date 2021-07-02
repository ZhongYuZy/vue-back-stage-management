<template>
  <div id="bin" style="width:500px ; height:400px" ></div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts';
export default {
  name: "",
  props: {},
  data() {
    return {};
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