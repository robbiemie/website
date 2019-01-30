import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './module/App'
import routeconfig from './router/index'
import VueI18n from 'vue-i18n'
import messages from '@/common/language'

import VueMessage from 'vue-messages'

Vue.use(VueMessage, {
  duration: 1, // unit: s
  themes: 'classic', // classic or classicBold
  styles: {
    top: '20px', // unit: px
    fontSize: 24,
    padding: '10px',
    fontWeight: 'normal' // normal or bold
  },
  before () {
    console.log('custom before hook')
  },
  done () {
    console.log('custom done hook')
  }
})
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
