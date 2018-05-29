/* eslint-disable */
const evCollections = {}
let eid = 0

class IframePostMsg {
  constructor(sel, onPKFinish) {
    if (typeof sel === 'string') {
      this.selector = sel
      if (onPKFinish) {
        this.onPKFinish = onPKFinish
      }
    }
    if (typeof sel === 'object') {
      this.selector = sel.selector;
      this.onPKFinish = sel.onPKFinish || function () {}
    }

    this.initEv()
  }
  initEv() {
    window.addEventListener('message', this.onMessage.bind(this), false);
  }
  onMessage(e) {
    // 不接收来自自己的数据
    if (e.origin === window.location.origin) {
      return
    }
    console.log('[接收到iframe数据]', e);
    let data = e.data
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }

    // 兼容单机游戏上传游戏结果
    if (data.result && this.onPKFinish) {
      this.onPKFinish(data)
      return
    }
    if (!data.action || !data.method) {
      throw new Error('通信协议必须有action与method字段')
    }
    if (data.action === 'call') {
      this.fire(data.method, data.args)
    }
  }
  // 监听来自iframe传递过来的数据
  on(method, cb) {
    cb.eid = eid
    eid += 1
    if (!evCollections[method]) {
      evCollections[method] = [cb]
    } else {
      evCollections[method].push(cb)
    }
  }
  // 发送给iframe数据
  emit(method, args = {}) {
    const iframe = document.querySelector(this.selector)
    if (!iframe) {
      throw new Error('没有获取到iframe，请检查选择器是否传对或者调用emit方法的时候iframe是否已经渲染')
    }
    let data = {
      method,
      args,
      action: 'call'
    }
    console.log('向iframe发送数据', JSON.stringify(data))
    iframe.contentWindow.postMessage(data, '*')
  }
  off(method, target) {
    if (!target) {
      evCollections[method] = []
    } else {
      if (typeof target === 'function') {
        for (let i = 0; i < evCollections[method].length;) {
          if (evCollections[method][i] === target) {
            evCollections[method].splice(i, 0, 1)
            break
          }
          i += 1
        }
      }
    }
  }
  removeListener() {
    window.removeEventListener('message', this.onMessage, false)
  }
  fire(methodName, args) {
    if (evCollections[methodName]) {
      evCollections[methodName].forEach((m) => {
        m(args)
      })
    } else {
      console.warn(`并没有注册${methodName}方法`)
    }
  }
}

export default IframePostMsg;
