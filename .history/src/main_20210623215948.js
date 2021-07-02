import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeLine from 'v-charts/lib/line.common';
import * as echarts from "echarts";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(VeLine.name, VeLine)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
