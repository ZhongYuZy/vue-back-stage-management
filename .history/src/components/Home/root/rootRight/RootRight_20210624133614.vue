<template>
  <div>
    <div>
      <img src="../../../../assets/1.png" class="tu" />
    </div>
    <div>
      {{Vue}}
      <el-progress :percentage="age"></el-progress>
      {{Html}}
      <el-progress
        :percentage="age1"
        status="success"
        :format="format"
      ></el-progress>
      {{Css}}
      <el-progress :percentage=age2></el-progress>
      {{JavaScript}}
      <el-progress :percentage=age3></el-progress>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  data() {
    return {
      JavaScript:'',
      Css:'',
      name: [],
      Vue: "aaa",
      Html: "",
      percentage:[],
      age:0,
      age1:0,
      age2:0,
      age3:0,
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/progress")
        .then((res) => {
          console.log(res);
          this.name = res.data.data.map((item) => {
            return item.name;
          });
          this.Vue = this.name[0];
          this.Html=this.name[1]
          this.Css=this.name[2]
          this.JavaScript=this.name[3]

          
          this.age=(res.data.data[0].progress)*100
          this.age1=(res.data.data[1].progress)*100
          this.age2=(res.data.data[2].progress)*100
          this.age3=(res.data.data[3].progress)*100
          console.log(this.age);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
  },
  mounted() {
    this.getData();
  },
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