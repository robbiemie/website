import Vue from 'vue'
import App from './module/App'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
let app = new Vue({
  el: '#app',
  render: h => h(App)
})
app.$mount()
