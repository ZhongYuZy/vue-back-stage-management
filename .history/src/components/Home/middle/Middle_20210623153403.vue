<template>
  <div>
      <div class="middle">
         <ve-line :data="chartData"></ve-line>
      </div>
      </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
export default {
  created () {
      this.chartData = {
        columns: ['日期', '销售量'],
        rows: [
          { '日期': '1月1日', '销售量': 123},
          { '日期': '1月2日', '销售量': 1223},
          { '日期': '1月3日', '销售量': 2123},
          { '日期': '1月4日', '销售量': 4123},
          { '日期': '1月5日', '销售量': 3123},
          { '日期': '1月6日', '销售量': 7123}
        ]
      }
    },

    components: { VeLine }
  }
————————————————
版权声明：本文为CSDN博主「简单随风」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lt326030434/article/details/100878546
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
// 中间的盒子
.middle {
  width: 1635px;
  height: 500px;
  background-color: skyblue;
  margin: 0 7px;
}
</style>