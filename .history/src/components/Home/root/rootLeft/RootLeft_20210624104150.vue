<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
      getData(){
          axiso.get('/api/orderData').then((res) => {
              console.log(res);
          }).catch((err) => {
              console.log('请求失败' , err);
          })
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>