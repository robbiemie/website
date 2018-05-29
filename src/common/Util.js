import Jsonp from 'jsonp'
import Axios from 'axios'
import Bus from './Bus'
import Config from './Config'
import Wxshare from './Wxshare'
import IframePostMsg from './IframePostMsg'
import { os, app } from './Platform'
import { stringify } from 'querystring'
import RecordDialog from './RecordDialog'

Axios.interceptors.request.use(function (config) {
  config.showLoading && Bus.$emit('showLoading')
  return config
}, function (error) {
  return apiRejectHandler(error)
})

Axios.interceptors.response.use(function (config) {
  Bus.$emit('hideLoading')
  return config
}, function () {
  return apiRejectHandler('接口请求出错')
})

function apiRejectHandler (msg) {
  Bus
    .$emit('hideLoading')
    .$emit('showToast', msg)
  return Promise.reject(msg)
}

function memoize (func) {
  const memo = {}
  return function (...params) {
    const args = [...params]
    if (args in memo) {
      return memo[args]
    }
    memo[args] = func.apply(this, args)
    return memo[args]
  }
}

const getUrlParameters = () => {
  const match = window.location.search.match(/([^?=&]+)(=([^&]*))/g)
  if (match) {
    return match.reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = decodeURIComponent(v.slice(v.indexOf('=') + 1)), a), {}) // eslint-disable-line
  }
  return {}
}

const Util = {
  memoize,

  RecordDialog,

  sleep: time => new Promise(resolve => setTimeout(resolve, time)),

  jumpApp: _ => (window.location.href = '//a.app.qq.com/o/simple.jsp?pkgname=com.duowan.makefriends'),

  iframePostMsg: new IframePostMsg('#iframe'),

  getUrlParameters: memoize(getUrlParameters),

  normalizeJsonpParam (url, data, showLoading) {
    if (typeof url === 'object') {
      showLoading = !!url.showLoading
      data = url.data || {}
      url = url.url
    } else if (typeof data === 'boolean') {
      showLoading = data
      data = {}
    }
    return {
      url,
      data,
      showLoading
    }
  },

  axios (url, data = {}, showLoading = true) {
    console.log('axios', ...arguments)
    if (typeof url === 'object') {
      return Axios({
        url: url.url,
        params: url.data
      })
    }
    if (typeof data === 'boolean') {
      showLoading = data
      data = {}
    }
    return Axios.get(url, {
      showLoading,
      params: data
    }).then(rsp => rsp.data).catch(err => {
      console.log(err.message)
    })
  },

  jsonp (...args) {
    if (Config.mock) {
      return Util.axios(...args)
    }
    const { url, data, showLoading } = Util.normalizeJsonpParam(...args)

    showLoading && Bus.$emit('showLoading')
    // 避免接口缓存
    data.__time = new Date().getTime()

    return new Promise((resolve, reject) => {
      Jsonp(`${url}?${stringify(data)}`, null, (error, data) => {
        if (error) {
          apiRejectHandler(error)
          reject(error)
        } else {
          Bus.$emit('hideLoading')
          resolve(data)
        }
      })
    }).catch(_ => {
      apiRejectHandler('接口请求出错')
    })
  },

  getGameConfig: memoize(_ => {
    const urlParams = Util.getUrlParameters()
    const { gameid = 'caihongmao_dj2' } = urlParams
    if (Object.keys(Config.gameInfo).indexOf(gameid) === -1) {
      console.log('meizhaodao')
      return Config.gameInfo['caihongmao_dj2']
    }
    console.log('5656')
    return Config.gameInfo[gameid]
  }),

  initShare: config => {
    if (app.QQ) return this.initQQShare(config)
    if (app.wechat) return this.initWxShare(config)
  },

  initWxShare: config => {
    // success_callback
    Object.assign(config, {
      onInit: _ => {
        Bus.$emit('showLoading')
        setTimeout(_ => Bus.$emit('hideLoading'), 2000)
      },
      onReady: _ => {
        Bus.$emit('hideLoading')
      }
    })
    Wxshare(config)
  },

  initQQShare: (_ => {
    const name = document.querySelector('meta[name="name"]')
    const image = document.querySelector('meta[name="image"]')
    const description = document.querySelector('meta[name="description"]')

    // link: 分享链接 title: 标题 img: 分享小卡片 desc: 分享内容
    return config => {
      // 如果有传url，无刷新方式重置浏览器的链接地址，不传的话默认分享当前链接
      if (config.link) {
        window.history.pushState(null, null, config.link)
      }
      name.content = config.title
      image.content = config.img
      description.content = config.desc

      setTimeout(_ => {
        config.success_callback && config.success_callback()
      }, 2000)
    }
  })(),

  setTitle: title => {
    document.title = title
    if (os.iOS) {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = '//file.do.yy.com/group3/M00/5B/2F/tz0MYFVa96KANioDAAAOiKQYvkU366.gif'
      iframe.onload = _ => setTimeout(_ => document.body.removeChild(iframe), 0)
      document.body.appendChild(iframe)
    }
  },

  asyncLoadJs (src) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      document.body.appendChild(script)
    })
  }
}

export default Util
