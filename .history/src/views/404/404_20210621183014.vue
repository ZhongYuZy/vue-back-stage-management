<template>
  <div class="head">
      <div class="tu"><img src="../../assets/404.jpg"></div>
      <div class="wen">服务器消失原因：</div>
      <div class="zi">可能被外星人劫走啦！</div>
      <button class="btn">返回首页</button>
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
</style>