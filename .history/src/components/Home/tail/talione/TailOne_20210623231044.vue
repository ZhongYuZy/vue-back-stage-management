<template>
  <div id="lei" style="width: 500px; height: 400px"></div>
</template>

<script>
// import * as echarts from 'echarts';
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      option: {
        radar: {
          indicator: [
            { name: "", max:''}
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [],
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
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
          console.log(res);
          let chartDom = document.getElementById("main");
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
</style>