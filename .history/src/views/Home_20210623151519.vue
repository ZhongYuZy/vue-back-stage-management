<template>
  <div class="box">
    <Herder></Herder>
    <Middle></Middle>
    <Tail></Tail>
    <div class="root">
      <div class="root-left"></div>
      <div class="root-right"></div>
    </div>
  </div>
</template>

<script>
import Herder from '../components/Home/herder/Herder'
import Middle from '../components/Home/middle/Middle'
import Tail from '../components/Home/tail/Tail'
import Root from '../components/Home/root/Root'
export default {
  
  name: "",
  props: {},
  data() {
    return {
    };
  },
  components: {
       Herder,
       Middle,
       Tail,
       Root
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
