<template>
  <div>早上好，亲爱的{{ name }} 上次登录时间：2019年7月02日9时58分55秒</div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      name:''
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.name=localStorage.getItem('username')
     
  },
  computed: {
    
  },
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>