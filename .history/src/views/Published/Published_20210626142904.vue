<template>
  <div id="app">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="jin"
        label="#"
        width="50"
        align="center"
        type="index"
        :index="indexMethod"
      >
      </el-table-column>
      <el-table-column prop="title" label="标题" width="400" align="center">
      </el-table-column>
      <el-table-column prop="author" label="作者" align="center" width="130">
      </el-table-column>
      <el-table-column
        prop="category"
        label="类目"
        width="180"
        align="center"
        :filters="[
          { text: 'Vue', value: 'Vue' },
          { text: 'React', value: 'React' },
           { text: 'Node.js', value: 'Node.js' },
           { text: 'JavaScript', value: 'JavaScript' },
           { text: '其他', value: '其他' },
        ]"
      >
        <template slot-scope="scope">
          <el-tag
             type="success"
            v-if='scope.row.category === "Vue"' >{{scope.row.category }}</el-tag
          >
           <el-tag
             type="warning"
            v-if='scope.row.category === "JavaScript"' >{{scope.row.category }}</el-tag
          >
           <el-tag
             type="warning"
            v-if='scope.row.category === "JavaScript"' >{{scope.row.category }}</el-tag
          >
            <el-tag
            type="primary"
            v-if='scope.row.category === "其他"' >{{scope.row.category }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="source" label="来源" width="150" align="center">
      </el-table-column>
      <el-table-column prop="star" label="重要性" width="250" align="center">
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="200" align="center">
      </el-table-column>
      <el-table-column prop="zuo" label="操作" width="300" align="center">
        <template slot-scope="scope" class="btn">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger" @click="onclick(scope.row._id)"
            >删除</el-button
          >
          <el-button type="success">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  


<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: [
        {
          jin: "",
          title: "",
          author: "",
          category: "",
          source: "",
          star: "",
          date: "",
        },
      ],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data;
          // this.tableData = res.data.data.map((item) => {
          //   return {
          //     jin: item.author,
          //     title: item.title,
          //     author: item.author,
          //     category: item.category,
          //     source: item.source,
          //     star: item.star,
          //     date: item.date,
          //   };
          // });
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    indexMethod(index) {
      return index + 1;
    },
    onclick(id) {
      axios
        .post("api/article/delete", {
          _id: id,
        })
        .then((res) => {
          this.getData();

          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
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
#app {
  width: 100%;
  height: 850px;
  background-color: #f0f2f5;
  padding: 25px 0 0px 25px;
}
.btn {
  display: flex;
}
</style>