<template>
  <div id='app'>
      <div class="box1">
        <div class="drop">支持拖拽</div>
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
  width: 100%;
  height: 920px;
  background-color:#eceef1 ;
}
.box1{
  width: 90%;
  background-color: skyblue;
}
.drop{
  font-size: 30px;

}
</style>