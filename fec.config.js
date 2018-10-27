module.exports = {
  extractCSS: false,
  px2rem: true,
  extendWebpack (config) {
    config.set('externals', {
      vue: 'Vue'
      // vuex: 'Vuex',
      // jquery: 'jQuery',
      // 'vue-router': 'VueRouter'
    })
  }
}
