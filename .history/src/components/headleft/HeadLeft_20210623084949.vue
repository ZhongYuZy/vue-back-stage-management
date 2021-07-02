<template>
  <div>欢迎来到小爱后台管理系统</div>
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
  methods: {
    let name =localStorage.getItem('username')
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>