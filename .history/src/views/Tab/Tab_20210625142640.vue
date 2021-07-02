<template>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
        <el-tab-pane label="未读消息" name="first">
          <div class="box">
            <div v-for="(item, index) in list" :key="index" class="wei">
              <div class="xi">{{ item.name }}</div>
              <div>
                {{ item.tiem }}
                <el-button @click="click(item, index)">标为已读</el-button>
              </div>
            </div>
            <el-button type="primary" class="btn" v-if="list.length!==0">全部标为已读</el-button>
            <div v-if="list.length=== 0" class="type"> 暂无数据</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读消息" name="second">
          <div class="box1">
            <div v-for="(item, index) in list1" :key="index" class="wei1">
              <div class="xi1">{{ item.name }}</div>
              <div>
                {{ item.tiem }}
                <el-button @click="onclick(item, index)">删除</el-button>
              </div>
            </div>
            <el-button type="danger" class="btn1">删除全部</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="回收站" name="third">
          <div class="box2">
            <div v-for="(item, index) in list2" :key="index" class="wei2">
              <div class="xi2">{{ item.name }}</div>
              <div>
                {{ item.tiem }}
                <el-button @click="onclick(item, index)">删除</el-button>
              </div>
            </div>
            <el-button type="danger" class="btn2">删除全部</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      activeName: "second",
      list: [
        {
          name: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          tiem: "2018-04-19 20：00：00",
        },
        {
          name: "今晚12点整点发红包 , 先到先得",
          tiem: "2018-04-19 20：00：00",
        },
      ],
      list1: [
        {
          name: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          tiem: "2018-04-19 20：00：00",
        },
      ],
      list2: [
        {
          name: "【系统通知】你的优惠卷已经过期",
          tiem: "2018-04-19 20：00：00",
        },
      ],
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    click(item, index) {
      this.list1.push(this.list[index]);
      this.list.splice(index, 1);
    },
    onclick(item, index) {
      this.list2.push(this.list1[index]);
      this.list1.splice(index, 1);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
.tabs {
  width: 95%;
  height: 850px;
  padding: 10px 15px;
  background-color: #f0f2f5;
}
.wei {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0px 0 0 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}
.xi {
  display: flex;
  align-content: center;
}
.btn {
  margin: 10px 0 10px 15px;
}
.box1 {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
.wei1 {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0px 0 0 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}
.xi1 {
  display: flex;
  align-content: center;
}
.btn1 {
  margin: 10px 0 10px 15px;
}
.box2 {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
.wei2 {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0px 0 0 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}
.xi2 {
  display: flex;
  align-content: center;
}
.btn2 {
  margin: 10px 0 10px 15px;
}
.type{
  width: 100%;
  display: flex;
  justify-content: center;
  
}
</style>