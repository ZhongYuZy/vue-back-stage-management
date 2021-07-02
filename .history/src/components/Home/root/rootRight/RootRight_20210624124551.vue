<template>
  <div>
    <div>
      <img src="../../../../assets/1.png" class="tu" />
    </div>
    <div>
      Vue
      <el-progress :percentage="50"></el-progress>
      Html
      <el-progress
        :percentage="100"
        status="success"
        :format="format"
      ></el-progress>
      Css
      <el-progress :percentage="50"></el-progress>
      JavaScript
      <el-progress></el-progress>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    // format(percentage) {
    //   return percentage === 100 ? "满" : `${percentage}%`;
    // },
    getData() {
      axios
        .get("/api/progress")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.tu {
  width: 100%;
  height: 300px;
  margin: 0 0 20px 0;
}
</style>