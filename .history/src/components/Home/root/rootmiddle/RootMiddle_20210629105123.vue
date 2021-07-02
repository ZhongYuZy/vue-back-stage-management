<template>
  <div id="app">
      <input type="checkbox">
      <div v-for="(item , index)" in arr :>
          
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
</style>