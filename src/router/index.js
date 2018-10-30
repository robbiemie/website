import menuBaseConfig from './menu.base'
import menuPortfolioConfig from '@/module/portfolio/menu.portfolio.js'

const groups = [
  menuBaseConfig,
  menuPortfolioConfig
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
