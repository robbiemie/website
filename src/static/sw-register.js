if ('serviceWorker' in navigator) {
  // 检测serviceworker支持情况
  navigator.serviceWorker.addEventListener('message', function (e) {
    // if(e.data==='sw')
    console.log('重新加载页面', e.data)
    location.reload()
  })
  let version = 1.0
  let projName = 'website'
  // if (projName.indexOf('/') === 0) {
  //   projName = projName.slice(projName.indexOf('/') + 1)
  // }
  navigator.serviceWorker.register(`sw.js?p=${projName}&v=${version}`, { scope: './' })
    .then(function (registration) {
      console.log('serviceworker 注册成功')
      let serviceworker
      if (registration.installing) {
        serviceworker = registration.installing
        console.log('当前状态为： installing')
      } else if (registration.waiting) {
        serviceworker = registration.waiting
        console.log('当前状态为： waiting')
      } else if (registration.activing) {
        serviceworker = registration.waiting
        console.log('当前状态为： activing')
      }
      if (serviceworker) {
        console.log('当前serviceworker', serviceworker)
        serviceworker.addEventListener('statechange', function (event) {
          console.log('当前状态改变为:', event.target.state)
        })
      }
    }).catch(function (err) {
      console.log('注册失败', err)
    })
}
