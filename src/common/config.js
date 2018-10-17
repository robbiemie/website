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
/**
 *
 */
/** 国家语言地区码 */
const langLocKey = {
  lang: [{
    code: 'zh-CHS',
    name: '汉语'
  }, {
    code: 'ja',
    name: '日语'
  }, {
    code: 'ko',
    name: '韩语'
  }, {
    code: 'fr',
    name: '法语'
  }, {
    code: 'ru',
    name: '俄语'
  }, {
    code: 'de',
    name: '德语'
  }, {
    code: 'id',
    name: '印尼语'
  }, {
    code: 'EN',
    name: '英语'
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
    code: 'ar',
    name: '阿拉伯语'
  }]
}

/**
 * 多语言配置
 */
export const tabelHeader = function () {
  return [{
    title: '翻译语言',
    key: 'lang',
    align: 'center',
    width: 150,
    render: (h, { row, index }) => {
      let renderOption = null
      renderOption = langLocKey.lang.map(item => {
        return <i-option value={item.code} >{item.name}</i-option>
      })
      return (
        <i-select value={this.tableValue[index].lang} on-on-change={ (v) => { this.tableValue[index].lang = v; this.translation(v) }}>
          {renderOption}
        </i-select>
      )
    }
  }, {
    title: '翻译文本',
    key: 'text',
    align: 'center',
    render: (h, { row, index }) => {
      row.text = this.translate.origin
      return (
        <i-input value={this.translate.origin} disabled placeholder="输入文本" clearable style="width: 130px" />
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
            // console.log('a', row)
            this.tableValue[index].text = row.text
          }
        }

      }, '预览')
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
    lang: 'EN',
    text: ''
  })
}

export default {
  fontFamily
}
