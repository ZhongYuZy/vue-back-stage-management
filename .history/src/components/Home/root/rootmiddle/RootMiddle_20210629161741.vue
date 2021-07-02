<template>
  <div id="app">
    <div class="title">ToDo list</div>
    <div v-for="(item, index) in arr" :key="index" class="ipt">
      <input type="checkbox" class="ipu" />
      <div class="option">
        <div>
          {{ item }}
        </div>
        <div class="el-icon-close" @click="onclick(item, index)"></div>
      </div>
    </div>
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="6 itme left" name="first"  :v-model="item.checked"></el-tab-pane>
        <el-tab-pane label="All" name="second" @click="first(item)"></el-tab-pane>
        <el-tab-pane label="Active" name="third" @click="third(item)"></el-tab-pane>
        <el-tab-pane label="copmleted" name="fourth"></el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        {
        name:"Vue",
        checked:true,
        },
        {
          name:"工具类",
          checked:true,
          },
          {
            name:"性能优化",
            checked:true,
          },
          {
            name:"root",
            checked:true,
          },
          {
             name:"其他", 
          }
       
        
         
         
          "java", 
          "javaspcirt"}],
      activeName: "buttom",
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  width: 400px;
  height: 510px;
  background-color: #fff;
  margin: 0 0 10px 0 ;
}
.title{
    display: flex;
    justify-content: flex-end;
    margin: 5px 0;
}
.option {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.ipt {
  display: flex;
  margin: 25px 0 35px 0;
}
.el-icon-close {
  display: none;
}
.ipt:hover {
  .el-icon-close {
    display: block;
  }
}
.ipu {
  margin: 0 20px 0 20px;
}
</style>