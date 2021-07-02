<template>
  <div>
    <div class="header">
      <div class="head-one">
        <i class="iconfont icon-renqun icon-one"></i>
        <div class="vis">
          <div class="visits">New Visits</div>
          <countTo
            :startVal="startVal"
            :endVal="endVal"
            :duration="3000"
          ></countTo>
        </div>
      </div>
      <div class="head-two">
        <i class="iconfont icon-xiaoxi icon-two"></i>
        <div class="vis">
          <div class="visits">Messages</div>
          <countTo
            :startVal="startVal"
            :endVal="endVal1"
            :duration="3000"
          ></countTo>
        </div>
      </div>
      <div class="head-three">
        <i class="iconfont icon-tubiaozhizuomoban icon-three"></i>
        <div class="vis">
          <div class="visits">Purchases</div>
          <countTo
            :startVal="startVal"
            :endVal="endVal2"
            :duration="3000"
          ></countTo>
        </div>
      </div>
      <div class="head-four">
        <i class="iconfont icon-gouwuchekong icon-four"></i>
        <div class="vis">
          <div class="visits">Shopping</div>
          <countTo
            :startVal="startVal"
            :endVal="endVal3"
            :duration="3000"
          ></countTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      startVal: 0,
      endVal: null,
      endVal1: null,
      endVal2: null,
      endVal3: null,
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then((res) => {
          (this.endVal = res.data.data.visits),
            (this.endVal1 = res.data.data.messages),
            (this.endVal2 = res.data.data.purchases),
            (this.endVal3 = res.data.data.shopping);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>