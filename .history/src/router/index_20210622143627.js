import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path:'/Sign',
    name:'Sign',
    compoent: () => import('../views/Sign/Sign.vue'),
    meta:{
      title:'登录'
    }
  },

  
  {
    path: '',
    component: Layout,
    children: [
      // 首页
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      // 已发布
      {
        path: '/Published',
        name: 'Published',
        component: () => import('../views/Published/Published.vue'),
        meta: {
          title: '已发布'
        }
      },
      // 统计
      {
        path: '/Statistics',
        name: 'Statistics',
        component: () => import('../views/Statistics/Statistics.vue'),
        meta: {
          title: '统计'
        }
      },
      // 发表文章
      {
        path: '/Articel',
        name: 'Articel',
        component: () => import('../views/article/Article.vue'),
        meta: {
          title: '发表文章'
        }
      },
      // 标签页
      {
        path:'/Tab',
        name:'Tab',
        component: () => import('../views/Tab/Tab.vue'),
        meta:{
          title:'标签页'
        }
      },
      // 导出excel
      {
        path:'/Excel',
        name:'Excel',
        component: () => import('../views/excel/Excel.vue'),
        meta:{
          title:'导出excel'
        }
      },
      // 图片上传
      {
        path:'/Uploda',
        name:'Uploda',
        component: () => import('../views/upload/Upload.vue'),
        meta:{
          title:'图片上传'
        }
      },
      // 退出系统
      {
        path:'/System',
        name:'System',
        component: () => import('../views/system/System.vue'),
        meta:{
          title:'退出系统'
        }
      }
    ]
  },

  {
    path: '*',
    component: () => import('../views/404/404.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
