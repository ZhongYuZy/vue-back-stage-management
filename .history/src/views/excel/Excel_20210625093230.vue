<template>
  <div>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      stripe
      style="width: 100%"
    >
      <el-table-column prop="NAME" label="名称" width="320" align="center">
      </el-table-column>
      <el-table-column
        prop="GOODS_SERIAL_NUMBER"
        label="商品编码"
        width="320"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="320" align="center">
      </el-table-column>
      <el-table-column
        prop="PRESENT_PRICE"
        label="现价"
        width="350"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="320"
        align="center"
        class="btn"
        >
        <!-- <template slot-scope="scope"> -->
          <el-button type="primary" @click="onclick(scope.row)">编辑</el-button>
          <el-button type="danger">删除</el-button>
        <!-- </template> -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品名称">
              <el-input v-model="form.NAME"></el-input>
            </el-form-item>
            <el-form-item label="原价">
              <el-input v-model="form.ORI_PRICE"></el-input>
            </el-form-item>
            <el-form-item label="现价">
              <el-input v-model="form.PRESENT_PRICE"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      form:{

      },
      dialogVisible: false,
      tableData: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    onclick(row) {
      this.dialogVisible = true;
      this.form=row;
      // console.log(this.form);
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
.btn {
  display: flex;
}
</style>