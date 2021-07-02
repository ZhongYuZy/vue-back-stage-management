<template>
  <div class="box">
    <div class="header">
      <el-button type="danger" class="cha">查看</el-button>
      <el-button type="primary" class="fa">发布</el-button>
    </div>
     <div class="home">
    <mavon-editor
            ref="md"
            placeholder="请输入文档内容..."
            :boxShadow="false"
            style="z-index:1;border: 1px solid #d9d9d9;height:50vh"
            v-model="content"
            :toolbars="toolbars"
          />
  </div>

————————————————
版权声明：本文为CSDN博主「yangliweigauguagua」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_32674347/article/details/104148600
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  width: 100%;
  height: 850px;
  background-color: #f0f2f5;
}
.header{
  display: flex;
  width: 99%;
  height: 50px;
  background-color:#59a586 ;
  margin: 25px 0px 30px 25px;
}
.cha{
  position: absolute;
  right: 90px;
  top: 100px;
}
.fa{
  position: absolute;
  right: 10px;
  top: 100px;
}
</style>