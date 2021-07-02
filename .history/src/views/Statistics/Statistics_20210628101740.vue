<template>
  <div>
    <!-- 统计头部的子组件 -->
    <Header></Header>
    <!-- 统计中间的子组件 -->
    <Middle></Middle>
    <Root></Root>
  </div>
</template>

<script>
import Header from '../../../src/components/Statistics/header/Header'
import Middle from '../../components/Statistics/middle/Middle'
import Root from '../../components/Statistics/root/Root'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
    Header,
    Middle,
    Root
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>