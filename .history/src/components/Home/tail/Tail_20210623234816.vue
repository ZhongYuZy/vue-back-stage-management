<template>
  <div>
    <div class="tail">
      <div class="tail-one">
        <TailOne></TailOne>
      </div>
      <div class="tail-two">
        <TailTwo></TailTwo>
      </div>
      <div class="tail-three">
        <TailThree></TailThree>
      </div>
    </div>
  </div>
</template>

<script>
import TailOne from '../tail/talione/TailOne'
import TailTwo from '../tail/tailtwo/TailTwo'
import TailThree from '../tail/tailthree/TailThree'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    TailOne,
    TailTwo,
    TailThree
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
  position: b;
}
.tail-two {
  width: 520px;
  height: 400px;
  background-color: #fff;
  margin: 10px 25px;
}
.tail-three {
  width: 520px;
  height: 400px;
  background-color: pink;
  margin: 10px 5px 10px 25px;
}
</style>