import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: _ => import('@/module/Index/Index'),
      name: 'index',
      meta: { title: 'HomePage' }
    },
    {
      path: '/work',
      component: _ => import('@/module/Work/Work'),
      name: 'work',
      meta: { title: 'Works' }
    },
    {
      path: '/svg',
      component: _ => import('@/module/Svg/index'),
      name: 'work',
      meta: { title: 'SVG Tools' }
    },
    {
      path: '*',
      component: _ => import('@/module/Index/Index'),
      name: 'index',
      meta: { title: 'HomePage' }
    }
  ]
})
// 路有变化title也变化
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
