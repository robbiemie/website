import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './module/App'
import routeconfig from './router/index'

let routers = function () {
  let route = new VueRouter(routeconfig())
  return route
}
let router = routers()
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
})
