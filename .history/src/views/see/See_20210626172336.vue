<template>
  <div>
    <button>返回</button>
    <mavon-editor
      class="md"
      v-model="id1.text"
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
      id1:'',

    };
  },
  components: {
      getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          // console.log(res);
          this.tableData = res.data.data;
          this.tableData.map((item) => {
            return (item.star = Number(item.star));
          });
          // console.log(this.tableData);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  methods: {
    
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>