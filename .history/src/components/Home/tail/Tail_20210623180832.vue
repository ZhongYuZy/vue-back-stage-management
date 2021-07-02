<template>
  <div>
    <div class="tail">
      <div class="tail-one">
        <TailOne></TailOne>
      </div>
      <div class="tail-two"></div>
      <div class="tail-three"></div>
    </div>
  </div>
</template>

<script>
import TailOne from '../tail/talione/TailOne'
import TailTwo from '../tail/tailtwo/TailTwo'
import TailTherr from '../tail/tailthree/TailThree'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    TailOne,
  },
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