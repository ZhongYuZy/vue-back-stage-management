<template>
  <div id="app">
      <div class="headerOne">
          <div>
              <div></div>
          </div>
          <div></div>
      </div>
      <div class="headerTwo"></div>
      <div class="headerThree"></div>
      <div class="headerFour"></div>
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
    display: flex;
    width: 100%;
    height: 870px;
    background-color: skyblue;
    padding: 15px 0 15px 25px;
}
.headerOne{
    width: 25%;
    height: 70px;
    background-color:#7ccabf;
}
.headerTwo{
    width: 25%;
    height: 70px;
    background-color: #e88a87;
}
.headerThree{
    width: 25%;
    height: 70px;
    background-color: #8375a3;
}
.headerFour{
    width: 25%;
    height: 70px;
    background-color: #9fcec1;
}
</style>