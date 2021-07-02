<template>
  <div class="box">
    <button class="btn">返回</button>
    <div class="biao">{{list}}</div>
    <mavon-editor
      class="md"
      v-model="list.text"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id1: "",
      list:[]
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .post("/api/article/article", {
          _id: this.id1,
        })
        .then((res) => {
          // console.log(id);
          this.list=res.data.data,
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
        
    },
  },
  mounted() {
    this.id1 = this.$route.query.id;
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>
<style lang='scss' scoped>
.box{
  width: 100%;
  height: 850px;
  background-color: #f0f2f5;
  padding: 15px 0 15px 25px;
}
.btn{
  background-color: skyblue;
  width: 80px;
  height: 30px;
  border: 0px;
}
.biao{
  display: flex;
  justify-content: center;
}
</style>