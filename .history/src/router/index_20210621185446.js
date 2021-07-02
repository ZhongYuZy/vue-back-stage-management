import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    childern: [
      // 首页
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      // 已发布
      {
        path:'/Published',
        name:'Published',
        component:() => import('../views/Published/Published.vue'),
        meta:{
          title:'已发布'
        }
      },

      {
        path:'/Statisti'
      }
    ]
  },

  {
    path:'*',
    component:() => import('../views/404/404.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
route.beforEach((to,from,next) => {
  document.title = to.meta.title
  next()
})
export default router
