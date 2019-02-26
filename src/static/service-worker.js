let mainCacheFiles = [
  'index.html'
]

let version = 'cache-v2'

// 缓存静态资源
self.addEventListener('install', function (evt) {
  // 强制更新sw.js
  self.skipWaiting()
  evt.waitUntil(
    caches.open(version).then(function (cache) {
      return cache.addAll(mainCacheFiles)
    })
  )
})

// 缓存更新
self.addEventListener('active', function (evt) {
  evt.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== version) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// 请求拦截
self.addEventListener('fetch', function (evt) {
  console.log('处理fetch事件:', evt.request.url)
  if (evt.request.url.match('sockjs')) return
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      if (response) {
        console.log('缓存匹配到res:', response)
        return response
      }
      console.log('缓存未匹配对应request,准备从network获取', caches)
      return fetch(evt.request).then(function (response) {
        console.log('fetch获取到的response:', response)
        // caches.open(version).then(function (cache) {
        //   cache.put(evt.request, response)
        // })
        return response
      })
    }).catch(function (err) {
      console.error('fetch 接口错误', err)
      throw err
    })
  )
})
