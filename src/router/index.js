const App = () => import(/* webpackChunkName: "app" */ '@/module/home/index')
const Blog = () => import(/* webpackChunkName: "blog" */ '@/module/blog/index')
const Hobby = () => import(/* webpackChunkName: "hobby" */ '@/module/hobby/index')
const Libary = () => import(/* webpackChunkName: "libary" */ '@/module/libary/index')

export default function () {
  return {
    routes: [
      { name: 'app', path: '/app', component: App },
      { name: 'lib', path: '/lib', component: Libary },
      { name: 'blog', path: '/blog', component: Blog },
      { name: 'hobby', path: '/hobby', component: Hobby },
      { name: 'default', path: '*', component: App }
    ]
  }
}
