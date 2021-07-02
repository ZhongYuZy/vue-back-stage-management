<template>
  <div id='app'>
    <div class="qi">期待您的下次光临</div>
    <button class="btn" @click="onclick">确定退出</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    onclick(){
      this.$router.push('/sign')

    },
    getData(){
      axios.get('/api /user/logout').then((res) => {
        console.log(res);
      }).catch((err) => {
          
       })
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app{
  margin: 0px 0px;
  height: 850px;
}
.qi{
  position: absolute;
  top:50%;
  left: 51%;
  font-size: 25px;
}
.btn{
  position: absolute;
  top: 55%;
  left: 52%;
  width: 150px;
  height: 50px;
  background-color: skyblue;
  border: 0px;
  color: #fff;
}
</style>