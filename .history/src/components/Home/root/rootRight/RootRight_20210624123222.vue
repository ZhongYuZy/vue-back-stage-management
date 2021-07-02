<template>
  <div>
    <div>
      <img src="../../../../assets/1.png" class="tu">
    </div>
    <div>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="50"></el-progress>
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
.tu{
  width: 100%;
  height: 300px;
}
</style>