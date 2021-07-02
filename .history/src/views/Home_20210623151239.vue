<template>
  <div class="box">
    <Herder></Herder>
    
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
import Herder from '../components/Home/herder/Herder'
import Middle from '../'
export default {
  
  name: "",
  props: {},
  data() {
    return {
    };
  },
  components: {
       Herder
  },
  methods: {
    
  },
  mounted() {
    
  },
  computed: {

  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  background-color: #f0f2f6;
}


// 尾部的盒子
.tail {
  display: flex;
}
// 尾部的三个盒子
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
// 底部的盒子
.root {
  display: flex;
}
// 底部左边的盒子
.root-left {
  width: 1100px;
  height: 500px;
  background-color: skyblue;
  margin: 0 10px 10px 5px;
}
// 底部右边的盒子
.root-right {
  width: 600px;
  height: 500px;
  background-color: skyblue;
  margin: 0 5px 10px 10px;
}

</style>
