<template>
  <div>
    <ve-line :data="chartData" class="middle"></ve-line>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
import axios from 'axios';
axio
export default {
  created() {
    this.chartData = {
      columns: ["日期", "销售量"],
      rows: [
        { 日期: "1月1日", 销售量: 123 },
        { 日期: "1月2日", 销售量: 1223 },
        { 日期: "1月3日", 销售量: 2123 },
        { 日期: "1月4日", 销售量: 4123 },
        { 日期: "1月5日", 销售量: 3123 },
        { 日期: "1月6日", 销售量: 7123 },
      ],
    };
  },
  components: { VeLine },
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {

    },
  },
  mounted() {},
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