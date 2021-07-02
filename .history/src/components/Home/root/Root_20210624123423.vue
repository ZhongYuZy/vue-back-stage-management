<template>
  <div>
    <div class="root">
      <div class="root-left">
        <RootLeft></RootLeft>
      </div>
      <div class="root-right">
        <RootRight></RootRight>
      </div>
    </div>
  </div>
</template>

<script>
import RootLeft from '../root/rootLeft/RootLeft'
import  RootRight from '../root/rootRight/RootRight'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    RootLeft,
    RootRight,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
// 底部的盒子
.root {
  display: flex;
}
// 底部左边的盒子
.root-left {
  width: 1100px;
  height: 500px;
  margin: 0 10px 10px 5px;
}
// 底部右边的盒子
.root-right {
  width: 600px;
  height: 500px;
  background-color: ;
  margin: 0 5px 10px 10px;
}
</style>