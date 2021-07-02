<template>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
        <el-tab-pane label="未读消息" name="first">
          <div v-for="(item, index) in list" :key="index" class="wei">
            <div>{{item.name}}</div><div>{{item.tiem}}</div><el-button>默认按钮</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
        <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
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
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.tabs {
  width: 95%;
  height: 850px;
  padding: 10px 15px;
  background-color: #f0f2f5;
}
.wei{
  display: flex;
  justify-content: space-between;
}
</style>