<template>
  <div id="bing"></div>
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
    let chartDom = document.getElementById("bing");
    let myChart = echarts.init(chartDom);
    let option;

   

    option && myChart.setOption(option);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#bing {
  flex: 1;
  height: 470px;
  background-color: yellow;
}
</style>