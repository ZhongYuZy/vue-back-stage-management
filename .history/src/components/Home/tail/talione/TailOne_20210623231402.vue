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
      lei:[],
      option: {
        radar: {
          indicator: [
            { name: ""}
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
                value: [],
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
          this.lei=ress.data.data[0].map((item , index) => {
            return index.
          })
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