import App from '@/module/home/index'
import Blog from '@/module/blog/index'
import Hobby from '@/module/hobby/index'
import Libary from '@/module/libary/index'

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
