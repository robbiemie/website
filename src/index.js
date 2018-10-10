import App from '@/container/Index.vue'

const Init = {
  initView () {
    new Vue({ // eslint-disable-line
      el: '#app',
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
