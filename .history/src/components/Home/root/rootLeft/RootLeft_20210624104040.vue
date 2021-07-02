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
          axiso.get('/api/orderData').then((res))
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>