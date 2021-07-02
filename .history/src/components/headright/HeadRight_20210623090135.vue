<template>
  <div>{{time1}}，亲爱的{{ name }} 上次登录时间：2019年7月02日9时58分55秒</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      name: "",
      time1: "",
    };
  },
  components: {},
  methods: {
    getTimeState() {
      let hours = time1.getHours();
      if (hours >= 6 && hours < 12) {
        this.greetings = "早上好";
      } else if (hours >= 12 && hours < 14) {
        this.greetings = "中午好";
      } else if (hours >= 14 && hours < 18) {
        this.greetings = "下午好";
      } else if (hours >= 18 && hours < 24) {
        this.greetings = "晚上好";
      } else {
        this.greetings = "凌晨好";
      }

      console.log(time1, hours);
    },
  },
  mounted() {
    this.name = localStorage.getItem("username");
    this.time1 = localStorage.getItem("time");
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>