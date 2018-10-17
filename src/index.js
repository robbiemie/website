import Vue from 'vue'
import App from '@/container/Index.vue'
import Lang from '@/common/language'
import VueI18n from 'vue-i18n'
import VueMessages from 'vue-messages'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import VueResource from 'vue-resource'
// import md5 from 'js-md5'

Vue.use(VueMessages)
Vue.use(VueI18n)
Vue.use(iView)
// Vue.use(VueResource)
// Vue.prototype.$md5 = md5

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: Lang // set locale messages
})

const Init = {
  initView () {
    new Vue({ // eslint-disable-line
      el: '#app',
      i18n,
      render: h => h(App)
    })
  }
}

Init.initView()

/** 初始化页面，防止攻击  */
// let head = document.getElementsByTagName('head')[0]
// let tags = head.children

// head[0].innerHTML = ''
// console.log(tags)
