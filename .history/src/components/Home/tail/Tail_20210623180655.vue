<template>
  <div>
    <div class="tail">
      <div class="tail-one"></div>
      <div class="tail-two"></div>
      <div class="tail-three"></div>
    </div>
  </div>
</template>

<script>
import 
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
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
</style>