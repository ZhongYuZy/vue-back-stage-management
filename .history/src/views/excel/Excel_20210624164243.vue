<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="名称" width="320" align="center"> </el-table-column>
    <el-table-column prop="name" label="商品编码" width="320" align="center"> </el-table-column>
    <el-table-column prop="address" label="原价" width="320" align="center"> </el-table-column>
     <el-table-column prop="name" label="现价" width="350" align="center"> </el-table-column>
      <el-table-column prop="name" label="操作" width="320" align="center"> </el-table-column>
  </el-table>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [
        {
          date: "",
          name: "",
          address: "",
        },
      ],
    };
  },
};
</script>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData(){
        axios.get('/api/tableData').then((res) => {
          console.log(object);
        }).catch((err) => {

        })
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>