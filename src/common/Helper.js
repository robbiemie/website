export default {
  getParam (key) {
    const result = new RegExp(`${key}=([^&]*)`, 'i').exec(window.location.search)
    return (result && decodeURI(result[1])) || ''
  },
  getCookie (name) {
    const RE = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(RE)
    if (arr) {
      return unescape(arr[2])
    }
    return ''
  },
  createLoginIframe (ticket, success, fail) {
    const apiUrl = 'https://lgn.yy.com/lgn/jump/authentication.do'
    const curPath = location.pathname.substring(0, location.pathname.lastIndexOf('/'))
    const busiUrl = encodeURIComponent(`${location.protocol}//${location.host}${curPath}/loginsuccess.html`)
    const paramObj = {
      action: 'authenticate',
      appid: '5060',
      direct: '1',
      busiUrl,
      src: '1',
      reqDomainList: 'lgn.yy.com',
      ticket
    }
    const paramArr = []
    Object.keys(paramObj).forEach((key) => {
      paramArr.push(`${key}=${paramObj[key]}`)
    })
    const paramStr = paramArr.join('&')
    const ifrm = document.createElement('iframe')
    ifrm.style.display = 'none'
    ifrm.frameBorder = 0
    document.body.appendChild(ifrm)
    window.setTimeout(() => {
      ifrm.src = `${apiUrl}?${paramStr}`
    }, 0)
    ifrm.onload = function () {
      if (typeof success === 'function') {
        success()
      }
    }
    ifrm.onerror = function () {
      if (typeof fail === 'function') {
        fail()
      }
    }
  },
  login (success, fail) {
    const ticket = this.getParam('xhWebToken')
    if (ticket) {
      this.createLoginIframe(ticket, success, fail)
    } else if (typeof fail === 'function') fail()
  }
}
