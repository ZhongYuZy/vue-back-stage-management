<template>
  <div class="box">
    <div class="header">
      <div class="head-one"></div>
      <div class="head-two"></div>
      <div class="head-three"></div>
      <div class="four-four"></div>
    </div>
    <div class="middle"></div>
    <div class="tail"></div>
    <div class="root"></div>
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
.header{
  display: flex;
}
.head-one{
  margin: 0 15px;
  width: 400px;
  height: 150px;
  background-color: skyblue;
}
</style>
