<template>
  <div id="app">
      
      <div v-for="(item , index) in arr" :key='index' class="ipt">
          <input type="checkbox">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        arr:['Vue' , '工具类' , '性能优化' , 'root' , '其他' , 'java' , 'javaspcirt' , '类目' ]
    }
  },
  components: {},
  methods: {

  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#app{
    width: 400px;
    height: 510px;
}
.ipt{
    margin: 25px 0;
}
</style>