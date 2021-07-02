<template>
  <div id='app'>
      <div class="box1">
        <div class="drop">支持拖拽</div>
        <div class="Element">Element Ul自带上传组件</div>
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

#app{
  padding: 20px;
  width: 100%;
  height: 920px;
  background-color:#eceef1 ;
}
.box1{
  padding: 5px 5px 5px 20px;
  width: 90%;
  background-color: #fff;
}
.drop{
  font-size: 30px;
}
.Element{
  display: flex;
  i
  margin: 15px 0;
  height: 60px;
  background-color:#eeeeee ;
  font-size: 20px;
}
</style>