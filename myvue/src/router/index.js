import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
  // 首页面
  path: '/',
  component: () => import('../page/home.vue'),
  children: [{
    path: '/student',
    component: () => import('../components/student.vue')
  },
  {
    path: '/hello',
    component: () => import('../components/HelloWorld.vue')
  }
  ]
}]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
