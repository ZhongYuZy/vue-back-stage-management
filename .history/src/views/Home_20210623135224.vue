<template>
  <div class="box">
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
      </div>
      <div class="head-three">
        <i class="iconfont icon-tubiaozhizuomoban icon-three"></i>
      </div>
      <div class="head-four">
        <i class="iconfont icon-gouwuchekong icon-four"></i>
      </div>
    </div>
    <div class="middle"></div>
    <div class="tail">
      <div class="tail-one"></div>
      <div class="tail-two"></div>
      <div class="tail-three"></div>
    </div>
    <div class="root">
      <div class="root-left"></div>
      <div class="root-right"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import countTo from "vue-count-to";
export default {
  components: { countTo },
  name: "",
  props: {},
  data() {
    return {
      startVal:0,
      endVal:null,
    };
  },
  components: {},
  methods: {
    getData(){
      axios.get('/api/homeData').then((res) => {
        console.log(res);
        this.endVal=data.data.visits
      }).catch((err) => {
        console.log('请求失败', err);
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  background-color: #f0f2f6;
}
.header {
  display: flex;
}
.head-one {
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: #fff;
}
.head-two {
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: #fff;
}
.head-three {
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: #fff;
}
.head-four {
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: #fff;
}
.middle {
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
.tail {
  display: flex;
}
.tail-one {
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 25px 10px 5px;
}
.tail-two {
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 25px;
}
.tail-three {
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 5px 10px 25px;
}
.root {
  display: flex;
}
.root-left {
  width: 1100px;
  height: 500px;
  background-color: skyblue;
  margin: 0 10px 10px 5px;
}
.root-right {
  width: 600px;
  height: 500px;
  background-color: skyblue;
  margin: 0 5px 10px 10px;
}
.icon-one {
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 40px !important;
  color: #45c8c5;
}
.icon-two {
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 50px !important;
  color: #74bdf7;
}
.icon-three {
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 50px !important;
  color: #f3627a;
}
.icon-four {
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 50px !important;
  color: #feba85;
}
.vis{
  position: ;
  right: 0px;
}
</style>
