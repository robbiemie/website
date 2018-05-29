let hdid = 0
let mac = 0
let imei = 0

window.getIMEICallback = function (argimei) {
  console.log(`imei-${argimei}`)
  imei = argimei
}
window.getHDIDCallback = function (arghdid) {
  console.log(`hdid-${arghdid}`)
  hdid = arghdid
}
window.getMacCallback = function (argmac) {
  console.log(`mac-${argmac}`)
  mac = argmac
}

const queryDeviceInfo = function () {
  if (window.nativeApp) {
    window.nativeApp.getIMEI()
    window.nativeApp.getHDID()
    window.nativeApp.getMac()
  } else {
    // console.debug('window.nativeApp is undefined');
    setTimeout(queryDeviceInfo, 100)
  }
}

console.log('init stat.websdk.js')

queryDeviceInfo()

const statBox = function (data) {
  if (window.hiidoEvent) {
    const hevent = new window.hiidoEvent('friend', data.id); // eslint-disable-line
    console.log(`data.setDevice is ${data.setDevice}`, imei, mac, hdid)
    if (data.setDevice) {
      hevent.setImei(imei)
      hevent.setMac(mac)
      hevent.setHdid(hdid)
    }
    hevent.setMoreinfo(data.data)
    hevent.reportJudge()
  } else {
    console.warn('没有hiddoEvent对象')
  }
}

export default statBox
