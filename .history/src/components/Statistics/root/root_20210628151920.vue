<template>
  <div id="zhu"></div>
</template>

<script>
import lodash from "lodash";
import * as echarts from "echarts";
import axios from "axios";
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

    

    myChart.setOption(this.option);
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