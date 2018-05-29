let ENV

if (__DEV__) {
  ENV = 'dev'
}
if (/test/.test(window.location.href)) {
  ENV = 'test'
}
if (__PROD__) {
  ENV = 'prod'
}

const urlBase = {
  dev: '//wolfkill-game-test.yy.com',
  test: '//wolfkill-game-test.yy.com',
  prod: '//wolfkill-game.yy.com'
}[ENV]

const config = {
  urlBase,
  // dev - 开发 test - 测试 prod - 生产
  ENV,

  activityId: 357,

  inApp: !!window.nativeApp,

  userInfo: {},

  withDrawPageUrl: '//kxd.yy.com/a/hot-game-withdraw/index.html',

  MAX_SHARECOUNT: 3,
  // 是否开启mock数据
  mock: true,

  mockLoadingTime: 500
}

export default config
