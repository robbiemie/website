fec<template>
<div>
  <div class="svg__header">SVG艺术字体<span class="svg__header--desc">一个在线生成svg艺术字体的工具</span></div>
  <a class="svg__github--url" href="https://github.com/yang657850144/website">
    Github <img class="svg__github" style="width:34px;height:34px;" src="https://makefriends.bs2dl.yy.com/bm1539174882949.png" />
  </a>
  <div class="svg">
    <div class="svg__content">
      <div class="svg__wrapper">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <!-- 二次贝塞尔曲线 -->
          <defs>
              <g id="groupText">
                <filter id="textFilter" v-if="advance.isShow && advance.isChangeBlur">
                  <feGaussianBlur in="SourceGraphic" :stdDeviation="advance.blur"/>
                </filter>
                <path id="myPath" :d="base.d" :stroke-dasharray="base.dasharray" stroke="transparent" fill="transparent"/>
                <text id="text" :filter="getTextFilter" :font-weight="style.fontWeight" font-family="Verdana" :stroke="style.strokeColor"
                  :stroke-width="style.strokeWidth" :font-size="style.fontSize"
                  :letter-spacing="style.letters" :word-spacing="style.words"
                  text-anchor="middle" :fill="getTextFill" >
                  <textPath xlink:href="#myPath" startOffset="50%">
                    {{tableValue[0] && tableValue[0].text}}
                  </textPath>
                </text>
              </g>
              <g id="groupColor"  v-if="advance.isShow">
                <linearGradient id="textColor">
                  <stop :offset="`${advance.frontPercent}%`" :stop-color="advance.frontColor" />
                  <stop :offset="`${advance.backPercent}%`" :stop-color="advance.backColor" />
                </linearGradient>
              </g>
          </defs>
          <use xlink:href="#groupText"/>
        </svg>
      </div>
      <Divider />
      <Card class="svg__source" :bordered="false">
        <p slot="title">
          <Icon type="md-arrow-dropdown" />
          SVG源码
        </p>
        <a href="#" slot="extra" @click="querySource">
          <Icon type="ios-loop-strong"></Icon>
          查看
        </a>
        <a class="btnsvgDom"  href="javascript:" data-clipboard-target="#svgDom" slot="extra" @click="copySvg">
          <Icon type="ios-loop-strong"></Icon>
          复制
        </a>
        <p id="svgDom">
          {{svgDom}}
        </p>
      </Card>
      <Card v-if="isquerySource" class="svg__source" :bordered="false">
        <p slot="title">
          <Icon type="md-arrow-dropdown" />
          CSS样式
        </p>
        <a class="btn"  href="javascript:" data-clipboard-target="#svgCss" slot="extra" @click="copyCss">
          <Icon type="ios-loop-strong"></Icon>
          复制
        </a>
        <p id="svgCss" v-html="svgCSS"></p>
      </Card>
      <Row>
        <Button type="info" @click="addDemo">在线演示</Button>
      </Row>
      <Card class="svg__demo" :bordered="false">
      </Card>
    </div>
    <div class="svg__tools">
      <Tabs class="svg__tabs" style="minHeight:500px;">
        <TabPane label="基础样式" name="base">
          <Row>
            <Tag type="border">基础特性</Tag>
          </Row>
          <Row>
            宽度: <InputNumber v-model="base.w" @on-change="renderW" placeholder="width" style="width: 80px"></InputNumber>
            <Progress :percent="base.w | getPercentw" style="marginLeft:10px;width: 150px"/>
            <ButtonGroup>
                <Button icon="ios-add" @click="addpercent('w')"></Button>
                <Button icon="ios-remove" @click="minuspercent('w')"></Button>
            </ButtonGroup>
          </Row>
          <Row>
            高度: <InputNumber v-model="base.h" @on-change="renderH" placeholder="height" style="width: 80px"></InputNumber>
            <Progress :percent="base.h | getPercenth" style="marginLeft:10px;width: 150px"/>
            <ButtonGroup>
                <Button icon="ios-add" @click="addpercent('h')"></Button>
                <Button icon="ios-remove" @click="minuspercent('h')"></Button>
            </ButtonGroup>
          </Row>
          <Row>
            调整弧度: <InputNumber v-model="base.verH" @on-change="renderVerH" placeholder="height" style="width: 80px"></InputNumber>
            <Progress :percent="base.verH | getPercenth" style="marginLeft:10px;width: 150px"/>
            <ButtonGroup>
                <Button icon="ios-add" @click="minusVerh()"></Button>
                <Button icon="ios-remove" @click="addVerh()"></Button>
            </ButtonGroup>
          </Row>
          <Row>
            字符间距:<InputNumber v-model="style.letters" @on-change="changeLetters" placeholder="width" style="width: 80px;marginRight:10px;"></InputNumber>
            单词间距:<InputNumber v-model="style.words" @on-change="changeWords" placeholder="width" style="width: 80px"></InputNumber>
          </Row>
          <Row>
            描边宽度:<InputNumber v-model="style.strokeWidth" @on-change="changeStrokeWidth" placeholder="width" style="width: 80px;marginRight:10px;"></InputNumber>
            描边颜色:<ColorPicker v-model="style.strokeColor" @on-active-change="changeStrokeColor" />
          </Row>
          <Row>
            显示辅助线:
            <RadioGroup v-model="style.isShowStroke" @on-change="changeStroke">
                <Radio label="1">开启</Radio>
                <Radio label="0">关闭</Radio>
            </RadioGroup>
          </Row>
          <Row v-if="style.isShowStroke === '1'">
            辅助线样式:
            <RadioGroup v-model="style.dasharray" @on-change="changeDasharray">
                <Radio label="0">实线</Radio>
                <Radio label="5">虚线</Radio>
            </RadioGroup>
          </Row>
          <Row>
            字体样式:
            <Select v-model="style.fontFamily" style="width:80px" @on-change="changeFontFamily" placement="bottom" >
              <Option v-for="item in base.fontFamily" :value="item.label" :key="item.value">{{ item.label }}</Option>
            </Select>
            字体加粗:
            <Select v-model="style.fontWeight" style="width:58px">
              <Option value="bold">是</Option>
              <Option value="normal">否</Option>
            </Select>
          </Row>
          <Row>
            字体大小: <InputNumber v-model="style.fontSize" @on-change="changeFontSize" placeholder="width" style="width: 80px"></InputNumber>
            <span v-if="!advance.isShow">字体颜色: <ColorPicker v-model="style.color" @on-active-change="changeFontColor" /></span>
          </Row>
          <Divider />
            <Row>
              <Tag color="#FFA2D3" type="border">高级特性 (实验)</Tag>
              <i-switch v-model="advance.isShow" @on-change="changeAdvanceVisible"></i-switch>
            </Row>
            <div v-if="advance.isShow">
              <Row>
                3D效果:
                <RadioGroup v-model="advance.isShowD3" @on-change="changeAdvanceD3">
                    <Radio label="1">开启</Radio>
                    <Radio label="-1">关闭</Radio>
                </RadioGroup>
              </Row>
              <Row>
                模糊度 : <InputNumber v-model="advance.blur" :step="0.1" @on-change="changeAdvanceBlur" placeholder="blur" style="width: 100px"></InputNumber>
              </Row>
              <Row>
                  F/B比例(%): <InputNumber v-model="advance.frontPercent" @on-change="changeFrontPercent" placeholder="width" style="width: 80px"></InputNumber>
              </Row>
              <Row>
                前景色: <ColorPicker v-model="advance.frontColor" @on-active-change="changeAdvanceFColor" />
                后景色: <ColorPicker v-model="advance.backColor" @on-active-change="changeAdvanceBColor" />
              </Row>
            </div>
        </TabPane>
        <TabPane label="多语言配置" name="multiLanguage">
          <Row>
            请填写英文翻译稿: <Input v-model="translate.q" style="width: auto" placeholder="large size" />
          </Row>
          <Table :columns="base.tabelHeader" :data="tableValue"></Table>
        </TabPane>
        <TabPane label="小惊喜" name="name3">
          <Row>
            打赏主播
          </Row>
          <Row>
            <img src="~@/img/money.png" style="width:300px;height:400px;" />
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </div>
</div>
</template>

<script>
import { fontFamily, tabelHeader, defaultVal } from '@/common/config'
import Clipboard from 'clipboard'
import { query } from '@/common/utils'
import jsonp from 'jsonp'

let el = null
let path = null
let text = null
let isClicked = false
const maxw = 1200
const maxh = 600
const maxVerh = 200

export default {
  name: 'svg',
  data () {
    return {
      base: {
        w: 0,
        h: 0,
        verH: 0,
        percentw: 0,
        percenth: 0,
        split: 0.5,
        d: 'M0 100 C 270 0, 540 0, 810 100',
        dasharray: '0',
        fontFamily: fontFamily.call(this),
        tabelHeader: tabelHeader.call(this)
      },
      style: {
        isShowStroke: '0',
        fontSize: 28,
        fontFamily: 'Arial',
        color: '#000',
        fontWeight: 'normal',
        letters: 0, // 字符间距
        words: 0, // 单词间距
        strokeWidth: 0, // 描边宽度
        strokeColor: '#000', // 描边颜色
        dasharray: '0'
      },
      advance: {
        isShow: false,
        frontPercent: 5,
        frontColor: '#000', // 前景色
        backPercent: 95,
        backColor: '#000', // 后景色
        blur: 0, // 模糊度
        isChangeBlur: false,
        isShowD3: '-1'
      },
      translate: {
        q: '', // 需要翻译的文本
        from: 'EN', // 源语言
        to: 'zh-CHS', // 目标语言
        appKey: '0f9fe3ae8208b31e', // 应用 ID
        salt: 2, // 随机数（自己随便写个数）
        secret_key: 'juvrU2JGhli0fbAzLHaoSdaI3fuwOvm1', // 密钥
        translations: []
      },
      svgDom: null,
      svgCSS: null,
      isquerySource: false,
      tableValue: []
    }
  },
  computed: {
    getTextFill () {
      let val = ''
      if (this.advance.isShow) {
        val = 'url(#textColor)'
        el && (el.style.fill = '')
      }
      return val
    },
    getTextFilter (val) {
      return this.advance.isShow ? 'url(#textFilter)' : ''
    }
  },
  mounted () {
    this.init()
  },
  filters: {
    getPercentw (val) {
      return parseInt((val / maxw).toFixed(2) * 100)
    },
    getPercenth (val) {
      return parseInt((val / maxh).toFixed(2) * 100)
    },
    getVerh (val) {
      return parseInt((val / maxVerh).toFixed(2) * 100)
    }
  },
  methods: {
    init () {
      this.tableValue.push(defaultVal())
      el = query('#svg')
      path = query('#myPath')
      text = query('#text')

      const svg = el.getBoundingClientRect()
      this.base.w = svg.width
      this.base.h = svg.height
    },
    translation (val) {
      let url = '//openapi.youdao.com/api?q=' + this.translate.q +
          '&appKey=' + this.translate.appKey +
          '&salt=' + this.translate.salt +
          '&from=' + this.translate.from +
          '&to=' + val +
          '&sign=' + this.$md5(this.translate.appKey + this.translate.q + this.translate.salt + this.translate.secret_key)

      jsonp(url, null, (e, res) => {
        if (!res.translation || res.translation.length <= 0) {
          this.$Message.error('没有查询到翻译', res.errorCode)
          return
        }
        let text = res.translation[0]
        this.tableValue[0].text = text
      })
    },
    addVerh (type) {
      this.renderVerH(this.base.verH += 10)
    },
    minusVerh (type) {
      this.renderVerH(this.base.verH -= 10)
    },
    addpercent (type) {
      if (type === 'w') {
        this.renderW(this.base.w + 100)
      } else {
        this.renderH(this.base.h + 100)
      }
    },
    minuspercent (type) {
      if (type === 'w') {
        this.renderW(this.base.w - 100)
      } else {
        this.renderH(this.base.h - 100)
      }
    },
    changeStrokeWidth (val) {
      this.style.strokeWidth = val
    },
    changeStrokeColor (val) {
      this.style.strokeColor = val
    },
    changeLetters (val) {
      this.style.letters = val
    },
    changeWords (val) {
      this.style.words = val
    },
    renderW (width) {
      if (width > 1200) {
        this.$Message.error('最大宽度不得超过1200px')
        this.base.w = width = 1200
      }
      if (width <= 10) {
        this.$Message.error('最大宽度不得少于10px')
        this.base.w = width = 10
      }
      this.base.w = el.style.width = width
      let list = this.base.d.split(' ')
      list[3] = parseInt(width / 3)
      list[5] = parseInt(width / 3 * 2)
      list[7] = width
      this.base.d = list.join(' ')
    },
    renderVerH (val) {
      let list = this.base.d.split(' ')
      list[4] = list[6] = val
      this.base.d = list.join(' ')
    },
    renderH (height) {
      if (height > 600) {
        this.$Message.error('最大高度不得超过600px')
        this.base.h = height = 600
      }
      if (height <= 10) {
        this.$Message.error('最大高度不得少于10px')
        this.base.h = height = 10
      }
      this.base.h = el.style.height = height
      let list = this.base.d.split(' ')
      console.log('list', list)
      list[8] = list[1] = parseInt(height / 2)
      this.base.d = list.join(' ')
    },
    changeAdvanceD3 (val) {
      this.advance.isShowD3 = `${val}`
      if (val === '1') { this.addTextShadow() } else {
        this.removeTextShadow()
      }
    },
    addTextShadow () {
      el.style.textShadow =
        `0 1px 0 #ccc,
        0 2px 0 #c9c9c9,
        0 3px 0 #bbb,
        0 4px 0 #b9b9b9,
        0 5px 0 #aaa,
        0 6px 1px rgba(0,0,0,.1),
        0 0 5px rgba(0,0,0,.1),
        0 1px 3px rgba(0,0,0,.3),
        0 3px 5px rgba(0,0,0,.2),
        0 5px 10px rgba(0,0,0,.25),
        0 10px 10px rgba(0,0,0,.2),
        0 20px 20px rgba(0,0,0,.15)`
    },
    removeTextShadow () {
      this.advance.isShowD3 = '-1'
      el.style.textShadow = ''
    },
    // 显示贝塞尔曲线
    changeStroke (val) {
      if (+val === 0) {
        path.style.stroke = 'transparent'
      } else {
        path.style.stroke = '#000'
      }
    },
    // 显示虚实线
    changeDasharray (val) {
      this.base.dasharray = val
    },
    changeAdvanceVisible (val) {
      this.advance.isShow = val
      this.removeTextShadow()
    },
    // 调整模糊度
    changeAdvanceBlur (val) {
      this.advance.isChangeBlur = true
      this.advance.blur = val
    },
    // 修改前景色比例
    changeFrontPercent (val) {
      this.advance.frontPercent = val
      this.advance.backPercent = 100 - val
    },
    // 修改前景色
    changeAdvanceFColor (val) {
      this.advance.frontColor = val
    },
    // 修改后景色
    changeAdvanceBColor (val) {
      this.advance.backColor = val
    },
    // 修改字体大小
    changeFontSize (val) {
      this.style.fontSize = text.style.fontSize = val
    },
    // 修改文字样式
    changeFontFamily (val) {
      this.style.fontFamily = text.style.fontFamily = val
    },
    // 修改文字颜色
    changeFontColor (val) {
      text.style.fill = val
    },
    // 查看源码
    querySource () {
      this.queryCSSStyle()
      this.svgDom = query('.svg__wrapper').innerHTML
    },
    // 查看CSS样式
    queryCSSStyle () {
      this.isquerySource = true
      let fontFamily
      this.base.fontFamily.forEach(elem => {
        if (elem.label === this.style.fontFamily) {
          fontFamily = elem.value
        }
      })
      this.svgCSS = `
        svg { <br/>
          &nbsp;&nbsp;margin: 0;<br/>
          &nbsp;&nbsp;padding: 0;<br/>
          &nbsp;&nbsp;width: ${this.base.w}px;<br/>
          &nbsp;&nbsp;height: ${this.base.h}px;<br/>
          &nbsp;&nbsp;text-align: center;<br/>
          &nbsp;&nbsp;border: solid 1px #5cadff;<br/>
          &nbsp;&nbsp;font-family: ${fontFamily};<br/>
        }

      `
    },
    addDemo () {
      if (isClicked) return
      isClicked = true
      // 在线演示
      let demo = query('.svg__demo')
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//jsfiddle.net/vicharles/en43k2ys/embed/html,css,result/dark/'

      demo.appendChild(script)
    },
    // btnsvgDom
    copySvg () {
      let clipboard = new Clipboard('.btnsvgDom')
      let self = this
      clipboard.on('success', function (e) {
        self.$Message.success('复制成功')
      })
      clipboard.on('error', function (e) {
        self.$Message.error('复制失败')
      })
    },
    copyCss () {
      let clipboard = new Clipboard('.btn')
      let self = this
      clipboard.on('success', function (e) {
        self.$Message.success('复制成功')
      })
      clipboard.on('error', function (e) {
        self.$Message.error('复制失败')
      })
    }

  }
}
</script>

<style lang="scss">
.svg {
  padding: 20px;
  display: flex;
  &__github {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    &--url{
      padding: 2px 10px;
      position: fixed;
      display: flex;
      align-items: center;
      top: 10px;
      right: 10px;
      color:#000;
      font-weight: bold;
      border: 1px solid #000;
      border-radius: 30px;
    }
  }
  &__header {
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 32px;
    font-weight: bold;
    font-family: 'sans-serif';
    color: #2db7f5;
    &--desc {
      margin-left: 20px;
      font-size: 16px;
      color: #000;
    }
  }
  &__content {
    margin: 0 auto;
  }
  &__tools {
    flex: 1;
    max-width: 500px;
  }
  &__tabs {
    height: 1000px;
    min-height: 1000px;
  }
  &__source {
    width: 800px;
  }
  &__demo {
    width: 800px;
  }
}

.ivu-row {
  margin: 10px 0;
}

#svg {
    margin: 0;
    padding: 0;
    width: 800px;
    height: 200px;
    text-align: center;
    border: solid 1px #5cadff;
    font-family: monospace;
}
.demo-split{
    height: 200px;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
}
.ivu-split-trigger-bar-con horizontal {
  display: none;
}
</style>
