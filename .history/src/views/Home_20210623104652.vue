<template>
  <div class="box">
    <div class="header">
      <div class="head-one"></div>
      <div class="head-two"></div>
      <div class="head-three"></div>
      <div class="head-four"></div>
    </div>
    <div class="middle"></div>
    <div class="tail">
      <div class="tail-one"></div>
      <div class="tail-two"></div>
      <div class="tail-three"></div>
    </div>
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
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-two{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-three{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.head-four{
  margin: 10px 7px;
  width: 400px;
  height: 100px;
  background-color: skyblue;
}
.middle{
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
.tail{
  display: flex;
}
.tail-one{
  width: 500px;
  height: 300px;
  background-color: pink;
}
</style>
