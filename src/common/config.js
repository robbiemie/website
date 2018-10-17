/** 字体配置 */
export const fontFamily = function () {
  return [{
    value: 'Arial',
    label: 'Arial'
  }, {
    value: 'SimSun',
    label: '宋体'
  }, {
    value: 'SimHei',
    label: '黑体'
  }, {
    value: 'Helvetica',
    label: 'Helvetica'
  }, {
    value: 'Verdana',
    label: 'Verdana'
  }, {
    value: 'Georgia',
    label: 'Georgia'
  }, {
    value: 'Geneva',
    label: 'Geneva'
  }, {
    value: 'sans-serif',
    label: 'sans-serif'
  }]
}

/** 国家语言地区码 */
const langLocKey = {
  lang: [{
    code: 'zh',
    name: '汉语'
  }, {
    code: 'id',
    name: '印尼语'
  }, {
    code: 'hi',
    name: '印度语'
  }, {
    code: 'en',
    name: '英语'
  }, {
    code: 'th',
    name: '泰语'
  }, {
    code: 'vi',
    name: '越南语'
  }, {
    code: 'es',
    name: '西语'
  }, {
    code: 'pt',
    name: '葡语'
  }, {
    code: 'ms',
    name: '马来语'
  }, {
    code: 'ar',
    name: '阿拉伯语'
  }]
}

/**
 * 多语言配置
 */
export const tabelHeader = function () {
  return [{
    title: '语言',
    key: 'lang',
    align: 'center',
    width: 150,
    render: (h, { row, index }) => {
      let renderOption = null
      renderOption = langLocKey.lang.map(item => {
        return <i-option value={item.code} >{item.name}</i-option>
      })
      return (
        <i-select value={this.tableValue[index].lang} on-on-change={ (v) => { this.tableValue[index].lang = v }}>
          {renderOption}
        </i-select>
      )
    }
  }, {
    title: '文本',
    key: 'text',
    align: 'center',
    render: (h, { row, index }) => {
      return (
        <i-input value={this.tableValue[index].text} on-on-blur={ e => { this.tableValue[index].text = e.target.value } } placeholder="输入文本" clearable style="width: 130px" />
      )
    }
  }, {
    title: '操作',
    key: 'opt',
    align: 'center',
    render: (h, { row, index }) => {
      let renderElem = h('i-button', {
        props: {
          type: 'primary',
          size: 'small'
        },
        on: {
          click: (e) => {
          }
        }

      }, '生成')
      return renderElem
    }
  }
  ]
}
/**
 * 多语言默认值
 */
export const defaultVal = function () {
  return Object.assign({}, {
    lang: 'zh',
    text: '我是你爸爸'
  })
}

export default {
  fontFamily
}
