module.exports = {
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
