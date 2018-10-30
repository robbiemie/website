import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './module/App'
import routeconfig from './router/index'
import VueI18n from 'vue-i18n'
import messages from '@/common/language'

let routers = function () {
  let route = new VueRouter(routeconfig())
  return route
}
let i18n = new VueI18n({
  locale: 'en',
  messages
})

let router = routers()
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
