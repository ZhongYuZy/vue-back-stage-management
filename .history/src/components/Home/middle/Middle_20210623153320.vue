<template>
  <div>
      <div class="middle">
         <ve-line :data="chartData"></ve-line>
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
// 中间的盒子
.middle {
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
</style>