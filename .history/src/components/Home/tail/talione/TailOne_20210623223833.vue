<template>
  <div id='lei' style="width: 500px; height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts';
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
    getData(){axios.get('/api/radarChat').then}
  },
  mounted() {
    
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>