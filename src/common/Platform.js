const ua = navigator.userAgent

export const app = {
  wechat: /(MicroMessenger)/i.test(ua),
  weibo: /(Weibo)/i.test(ua),
  qq: /(SQ)/i.test(ua),
  qzone: /(Qzone)/i.test(ua),
  QQ: /(SQ)/i.test(ua) || /(Qzone)/i.test(ua)
}

export const os = {
  iOS: (/(iPhone|iPad|iPod|iOS)/i.test(ua)),
  android: (/(Android)/i.test(ua))
}
export default {}
