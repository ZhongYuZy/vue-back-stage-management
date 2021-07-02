<template>
  <div>
    {{ greetings }}，亲爱的{{ name }} 上次登录时间：2019年7月02日9时58分55秒
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      name: "",
      time1: "",
      greetings:'',
    };
  },
  components: {},
  methods: {
   
  },
  mounted() {
    this.name = localStorage.getItem("username");
    this.time = localStorage.getItem("time");
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>