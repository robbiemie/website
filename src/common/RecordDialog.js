import RecordDialogVue from '@/component/RecordDialog.vue'
const RecordDialogConstructor = Vue.extend(RecordDialogVue) // 直接将Vue组件作为Vue.extend的参数

let nId = 1
const instances = []
let instance

const RecordDialog = (opt = {}) => {
  let id = 'notice-' + nId++

  instance = new RecordDialogConstructor({
    data: {
      type: opt.type || 'self',
      success: opt.success || false,
      winAll: opt.winAll || false,
      score: opt.score || 0,
      reviviTime: opt.reviviTime || 0
    },
    methods: {
      onClose: opt.onClose || (_ => {}),
      onConfirm: opt.onConfirm || (_ => {})
    }
  }) // 实例化一个带有content内容的LuckBag

  instance.id = id
  instance.vm = instance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  document.body.appendChild(instance.dom) // 将dom插入body
  instance.dom.style.zIndex = nId + 1001 // 后插入的LuckBag组件z-index加一，保证能盖在之前的上面
  instances.push(instance)
  return instance.vm
}

RecordDialog.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

RecordDialog.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].closeWithOutUserOnClose()
  }
}

export default RecordDialog
