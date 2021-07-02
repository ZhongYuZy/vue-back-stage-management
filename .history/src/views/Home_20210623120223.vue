<template>
  <div class="box">
    <div class="header">
      <div class="head-one">
        <i class="iconfont icon-renqun icon-one" ></i>
      </div>
      <div class="head-two">
        <i class="iconfont icon-xiaoxi icon-two"></i>
      </div>
      <div class="head-three">
        <i class="iconfont icon-tubiaozhizuomoban icon-three"></i>
      </div>
      <div class="head-four"></div>
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
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  background-color: #f0f2f6;
}
.header{
  display: flex;
}
.head-one{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-two{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-three{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-four{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.middle{
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
.tail{
  display: flex;
}
.tail-one{
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 25px 10px 5px;
}
.tail-two{
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 25px;
}
.tail-three{
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 5px 10px 25px;
}
.root{
  display: flex;
}
.root-left{
  width: 1100px;
  height: 500px;
  background-color: skyblue;
  margin: 0 10px 10px 5px;
}
.root-right{
  width: 600px;
  height: 500px;
  background-color: skyblue;
  margin: 0 5px 10px 10px;
}
.icon-one{
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 40px !important;
  color: #45c8c5;
}
.icon-two{
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 50px !important;
  color: #74bdf7;
}
.icon-three{
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 50px !important;
  color: #74bdf7;
}
</style>
