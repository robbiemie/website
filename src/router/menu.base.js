
const App = () => import(/* webpackChunkName: "app" */ '@/module/home/index')
const Blog = () => import(/* webpackChunkName: "blog" */ '@/module/blog/index')
const Docs = () => import(/* webpackChunkName: "hobby" */ '@/module/docs/index')
const Libary = () => import(/* webpackChunkName: "libary" */ '@/module/libary/index')

export default [
  { name: 'app', path: '/app', component: App },
  { name: 'lib', path: '/lib', component: Libary },
  { name: 'blog', path: '/blog', component: Blog },
  { name: 'Docs', path: '/docs', component: Docs },
  { name: 'default', path: '*', component: App }
]
