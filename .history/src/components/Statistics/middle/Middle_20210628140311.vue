<template>
  <div id="app">
      <MiddleLfet></MiddleLfet>
      <MiddleRight></MiddleRight>
  </div>
</template>

<script>
import MiddleLfet from '../middle/middleLeft/MiddleLeft'
import MiddleRight from '../middle/middleRight/MiddleRight'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
      MiddleLfet,
      MiddleRight
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#app{
    display: flex;
    width: 100%;
    background-color: #f0f2f5;
    height: 470px;
}
</style>