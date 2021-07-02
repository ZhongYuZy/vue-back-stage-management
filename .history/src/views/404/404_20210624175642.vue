<template>
  <div class="head">
      <div class="tu"><img src="../../assets/404.jpg"></div>
      <div class="wen">服务器消失原因：</div>
      <div class="zi">可能被外星人劫走啦！</div>
      <div class="btn">
        <button class="bun" @click=click>返回首页</button>
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
.head{
    width: 100%;
    height: 920px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
}
.tu{
  display: flex;
  justify-content: center;
  width: 100%;
}
.tu img{
  width: 500px;
  height: 320px;
}
.wen{
  display: flex;
  justify-content: center;
}
.zi{
  margin: 10px 0 0 50px;
  display: flex;
  justify-content: center;
}
.btn{
  margin: 20px 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
}
.bun{
  border: 0px;
  background-color: skyblue;
  width: 100px;
}
</style>