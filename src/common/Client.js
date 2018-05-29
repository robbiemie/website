const useClientMethod = (methodName, ...args) => {
  console.log(...args, window.nativeApp)
  if (window.nativeApp) {
    window.nativeApp[methodName](...args)
  }
}

export default {
  nativeShare: data => useClientMethod('nativeShare', {
    type: data.type,
    title: data.title,
    content: data.content,
    url: data.url
  })
}
