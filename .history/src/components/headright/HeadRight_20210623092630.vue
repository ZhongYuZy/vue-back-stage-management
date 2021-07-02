<template>
  <div>{{ greetings }}，亲爱的{{ name }} 上次登录时间:{{ time1 }}</div>
</template>

<script>
import dayjs from
export default {
  name: "",
  props: {},
  data() {
    return {
      name: "",
      greetings: "",
      time1:''
    };
  },
  components: {},
  methods: {
    getTimeState() {
      let time = new Date();
      let hours = time.getHours();
      if (hours >= 6 && hours < 12) {
        this.greetings = "早上好";
      } else if (hours >= 12 && hours < 14) {
        this.greetings = "中午好";
      } else if (hours >= 14 && hours < 18) {
        this.greetings = "下午好";
      } else if (hours >= 18 && hours < 24) {
        this.greetings = "晚上好";
      } else {
        this.greetings = "该睡觉了";
      }

      console.log(time, hours);
    },
  },
  mounted() {
    this.name = localStorage.getItem("username");
    this.getTimeState()
    this.time1 = localStorage.getItem('time');
     this.time1 = dayjs(localStorage.getItem("time")).format(
      `YYYY年MM月DD日 HH时mm分ss秒`
    )
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>