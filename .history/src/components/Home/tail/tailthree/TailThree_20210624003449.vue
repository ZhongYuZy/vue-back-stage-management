<template>
  <div id="zhu"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
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