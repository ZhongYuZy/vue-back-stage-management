<template>
  <div id="app">
    <div class="headerOne">
      <div class="One1">
        <div>今日发布</div>
        <div></div>
      </div>
      <div class="One2 el-icon-check"></div>
    </div>
    <div class="headerTwo">
      <div class="two1">
        <div class="yuan">原创文章</div>
        <div class="abc">{{this.abc}}</div>
      </div>
      <div class="two2 el-icon-notebook-2"></div>
    </div>
    <div class="headerThree">
      <div class="therr1">
        <div>新留言</div>
        <div></div>
      </div>
      <div class="therr2 el-icon-chat-dot-square"></div>
    </div>
    <div class="headerFour">
      <div class="four1">
        <div>新消息</div>
        <div></div>
      </div>
      <div class="four2 el-icon-phone-outline"></div>
    </div>
  </div>
</template>

<script>
import lodash from "lodash"
import dayjs from 'dayjs'
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
        list:[],
        abc:null,
    };
  },
  components: {},
  methods: {
    //   获取所有文章
    getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res);
            this.list=res.data.data
            this.abc = (lodash.groupBy(this.list, "source")).原创.length
            
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
      this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  display: flex;
  width: 100%;
  height: 870px;
  background-color: skyblue;
  padding: 15px 0 15px 25px;
}
.headerOne {
  display: flex;
  width: 25%;
  height: 70px;
  background-color: #7ccabf;
}
.headerTwo {
  display: flex;
  width: 25%;
  height: 70px;
  background-color: #e88a87;
}
.headerThree {
  display: flex;
  width: 25%;
  height: 70px;
  background-color: #8375a3;
}
.headerFour {
  display: flex;
  width: 25%;
  height: 70px;
  background-color: #9fcec1;
}
.One1 {
  display: flex;
  justify-content: center;
  width: 80%;
  height: 70px;
  color: #fff;
  line-height: 60px;
}
.One2 {
  // display: flex;
  // justify-content: center;
  width: 20%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
}
.two1 {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70px;
  color: #fff;
}
.yuan{
    display: flex;
    justify-content: center;
    margin: 15px 0 0 0;
}
.abc{
    display: flex;
    justify-content: center;
}
.two2 {
  // display: flex;
  // justify-content: center;
  width: 20%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
}
.therr1 {
  display: flex;
  justify-content: center;
  width: 80%;
  height: 70px;
  color: #fff;
  line-height: 60px;
}
.therr2 {
  // display: flex;
  // justify-content: center;
  width: 20%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
}
.four1 {
  display: flex;
  justify-content: center;
  width: 80%;
  height: 70px;
  color: #fff;
  line-height: 60px;
}
.four2 {
  // display: flex;
  // justify-content: center;
  width: 20%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
}
</style>