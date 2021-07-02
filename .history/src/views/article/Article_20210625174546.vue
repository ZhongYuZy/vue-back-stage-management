<template>
  <div class="box">
    <div class="header">
      <el-button type="danger" class="cha">查看</el-button>
      <el-button type="primary" class="fa">发布</el-button>
    </div>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div class="form">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author" style="width=150"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option label="Vue" value="shanghai"></el-option>
              <el-option label="React" value="beijing"></el-option>
              <el-option label="Node.js" value="beijing1"></el-option>
              <el-option label="性能优化" value="beijing2"></el-option>
              <el-option label="JavaScript" value="beijing3"></el-option>
              <el-option label="小程序" value="beijing4"></el-option>
              <el-option label="工具类" value="beijing5"></el-option>
              <el-option label="其它" value="beijing6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="shanghai"></el-option>
              <el-option label="转载" value="beijing"></el-option>
              <el-option label="与他人合作" value="beijing1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option label="1" value="shanghai"></el-option>
              <el-option label="2" value="beijing"></el-option>
              <el-option label="3" value="beijing1"></el-option>
              <el-option label="4" value="beijing2"></el-option>
              <el-option label="5" value="beijing3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择时间">
            <el-date-picker
              v-model="date"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="block"></div>
      </el-form>
    </div>
    <div class="home">
      <mavon-editor
        ref="md"
        placeholder="请输入文档内容..."
        :boxShadow="false"
        style="z-index: 1; border: 1px solid #d9d9d9; height: 50vh"
        v-model="ruleForm.text"
        :toolbars="toolbars"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      content: "",
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: "",
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      value3: "",
      // toolbars: {
      //   bold: true, // 粗体
      //   italic: true, // 斜体
      //   header: true, // 标题
      //   underline: true, // 下划线
      //   strikethrough: true, // 中划线
      //   mark: true, // 标记
      //   superscript: true, // 上角标
      //   subscript: true, // 下角标
      //   quote: true, // 引用
      //   ol: true, // 有序列表
      //   ul: true, // 无序列表
      //   link: true, // 链接
      //   imagelink: true, // 图片链接
      //   code: true, // code
      //   table: true, // 表格
      //   fullscreen: true, // 全屏编辑
      //   readmodel: true, // 沉浸式阅读
      //   htmlcode: true, // 展示html源码
      //   help: true, // 帮助
      //   /* 1.3.5 */
      //   undo: true, // 上一步
      //   redo: true, // 下一步
      //   trash: true, // 清空
      //   save: false, // 保存（触发events中的save事件）
      //   /* 1.4.2 */
      //   navigation: true, // 导航目录
      //   /* 2.1.8 */
      //   alignleft: true, // 左对齐
      //   aligncenter: true, // 居中
      //   alignright: true, // 右对齐
      //   /* 2.2.1 */
      //   subfield: true, // 单双栏模式
      //   preview: true, // 预览
      // },
    };
  },
  components: {},
  methods: {
    $imgAdd(pos, $file) {
      console.log(pos, $file);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 850px;
  background-color: #f0f2f5;
}
.header {
  display: flex;
  width: 99%;
  height: 50px;
  background-color: #59a586;
  margin: 25px 0px 30px 25px;
}
.cha {
  position: absolute;
  right: 90px;
  top: 100px;
}
.fa {
  position: absolute;
  right: 10px;
  top: 100px;
}
.form {
  display: flex;
}
</style>