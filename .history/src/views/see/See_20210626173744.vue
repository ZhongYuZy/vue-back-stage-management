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
    
  },
  methods: {
     getData(id) {
      console.log(id);
      axios
        .post("/api/article/article", {
          _id: id,
        })
        .then((res) => {
          // console.log(id);
          this.$router
            .push({
              path: "/See",
              query: {
                id: id,
              },
            })
            .catch((err) => {
              console.log("请求失败", err);
            });
        });
    },
  },
  mounted() {
    this.id1=this.$rout
    this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>