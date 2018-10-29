const App = () => import(/* webpackChunkName: "app" */ '@/module/home/index')
const Blog = () => import(/* webpackChunkName: "blog" */ '@/module/blog/index')
const Portfolio = () => import(/* webpackChunkName: "hobby" */ '@/module/portfolio/index')
const Libary = () => import(/* webpackChunkName: "libary" */ '@/module/libary/index')

export default function () {
  return {
    routes: [
      { name: 'app', path: '/app', component: App },
      { name: 'lib', path: '/lib', component: Libary },
      { name: 'blog', path: '/blog', component: Blog },
      { name: 'portfolio', path: '/portfolio', component: Portfolio },
      { name: 'default', path: '*', component: App }
    ]
  }
}
