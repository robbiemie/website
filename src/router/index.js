import menuBaseConfig from './menu.base'
import menuPortfolioConfig from '@/module/portfolio/menu.portfolio.js'
import menuBlogConfig from '@/module/blog/menu.blog.js'
import menuLibaryConfig from '@/module/libary/menu.libary.js'

const groups = [
  /** 一级路由 */
  menuBaseConfig,
  /** 二级路由 */
  menuPortfolioConfig,
  menuBlogConfig,
  menuLibaryConfig
]

export default function () {
  let routes = []
  groups.forEach(menus => {
    menus.forEach(menu => {
      routes.push({
        name: menu.name,
        path: menu.path,
        component: menu.component
      })
    })
  })
  return {
    routes
  }
}
