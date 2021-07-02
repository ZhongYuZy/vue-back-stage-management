<template>
  <div class="box">
    <div class="header">
      <el-button type="danger" class="cha">查看</el-button>
      <el-button type="primary" class="fa">发布</el-button>
    </div>
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
}
.fa{
  position: absolute;
  right: 10px;
}
</style>