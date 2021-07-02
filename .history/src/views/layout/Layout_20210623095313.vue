<template>
  <div id='app'>
    <el-container>
      <el-header>
        <!-- 头部左边的盒子 -->
        <Head_Left></Head_Left>
        <!-- 头部右边的盒子 -->
        <Head_Right></Head_Right>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Head_Left from "../../components/headleft/HeadLeft";
import Head_Right from "../../components/headright/HeadRight";
import Aside from "../../components/Aside/Aside";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Head_Left,
    Head_Right,
    Aside,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app{
  width: 100%;
  height: 820px;
}
.el-header {
  display: flex;
  background-color: #295c87;
  padding: 0px 0px;
  align-items: center;
  font-size: 18px;
  color: #fff;
  justify-content: space-between;
}
</style>