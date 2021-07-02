<template>
  <div>
    <el-container>
      <el-header>
      <Head_Left></Head_Left>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
import Head_Left from '../../components/headleft/HeadLeft'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Head_Left,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header{
  background-color: #295c87;
  padding: 0px 0px;
  r
}
</style>