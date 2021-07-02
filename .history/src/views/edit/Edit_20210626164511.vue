<template>
  <div class="box">
    <div class="header">
      <el-button type="primary" class="cha" @click="sky">发布</el-button>
      <el-button type="danger" class="fa" @click='click1'>返回</el-button>
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
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其它" value="其它"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择时间">
            <el-date-picker
              v-model="ruleForm.date"
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
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id1: null,
      content: "",
      ruleForm: {},
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
      rules: {
        title: [
          {
            required: true,
            message: "标题不能为空",
            trigger: "blur",
          },
        ],
        abstract: [
          {
            required: true,
            message: "摘要不能为空",
            trigger: "blur",
          },
        ],
        author: [
          {
            required: true,
            message: "作者不能为空",
            trigger: "blur",
          },
        ],
        category: [
          {
            required: true,
            message: "类目不能为空",
            trigger: "blur",
          },
        ],
        source: [
          {
            required: true,
            message: "来源不能为空",
            trigger: "blur",
          },
        ],
        star: [
          {
            required: true,
            message: "重要性不能为空",
            trigger: "blur",
          },
        ],
      },
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
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
          this.ruleForm = res.data.data;
          console.log(res);
        })
        .catch((err) => {
          console.log("请求成功", err);
        });
    },
    sky() {
      axios
        .post(" /api/article/update ", {
          id: this.id1,
          title: this.ruleForm.title,
          abstract: this.ruleForm.abstract,
          author: this.ruleForm.author,
          category: this.ruleForm.category,
          source: this.ruleForm.source,
          star: this.ruleForm.star,
          text: this.ruleForm.text,
          date: this.ruleForm.date,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
      this.$router.push("/");
    },
    click1(){
        this.$router.push('/')
    }
  },
  mounted() {
    this.id1 = this.$route.query.id;
    this.getData();
    console.log(this.id1);
  },
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
  margin: 25px 0px 30px 25px;
}
.cha {
  position: absolute;
  right: 500px;
  top: 100px;
}
.fa {
  position: absolute;
  left: 600px;
  top: 100px;
}
.form {
  display: flex;
}
</style>