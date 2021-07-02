import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeLine from 'v-charts/lib/line.common';
import * as echarts from "echarts";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(VeLine.name, VeLine)
Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/**
          this.this.option.series.data = res.data.data.map((item) => {
            console.log(item)
            return {
              name : item.name,
              value : item.value,
            }
          });*/