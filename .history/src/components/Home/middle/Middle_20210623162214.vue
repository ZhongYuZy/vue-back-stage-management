<template>
  <div class="middle"> 
  </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {
      axios.get('/api/homeChat').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log('请求成功' , err);
      })
    },
    
  },
  mounted() {
    this.getData()
  },
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