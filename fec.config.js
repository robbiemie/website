module.exports = {
  px2rem: {
    rootValue: 75, // 用于 750px 宽度的设计稿
    propWhiteList: [],
    minPixelValue: 2
  },
  extractCSS: false,
  extendWebpack (config) {
    config.set('externals', {
      vue: 'Vue'
      // vuex: 'Vuex',
      // jquery: 'jQuery',
      // 'vue-router': 'VueRouter'
    })
  }
}
