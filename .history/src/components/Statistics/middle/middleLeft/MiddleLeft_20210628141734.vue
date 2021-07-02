<template>
  <div id="bin"></div>
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
    var chartDom = document.getElementById("bin");
    var myChart = echarts.init(chartDom);
    var option;

   
    myChart.setOption(option);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#bin {
  flex: 1;
  height: 470px;
}
</style>