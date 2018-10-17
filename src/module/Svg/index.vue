<template>
  <div class="svg">
    <div class="svg__content">
      <div class="svg__wrapper">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <!-- 三次贝塞尔曲线 -->
          <path id="myPath" :d="base.d" :stroke-dasharray="base.dasharray" stroke="transparent" fill="transparent"/>
          <text id="text" font-family="Verdana" :font-size="style.fontSize"  text-anchor="middle" style="fill:#000;" >
            <textPath xlink:href="#myPath" startOffset="50%">
              {{tableValue[0] && tableValue[0].text}}
            </textPath>
          </text>
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
      <Card class="svg__demo" :bordered="false">
      </Card>
    </div>
    <div class="svg__tools">
      <Tabs class="svg__tabs" style="minHeight:500px;">
        <TabPane label="基础配置" name="base">
          <Row>
            宽度: <InputNumber v-model="base.w" @on-change="renderW" placeholder="width" style="width: 80px"></InputNumber>
            高度: <InputNumber v-model="base.h" @on-change="renderH" placeholder="height" style="width: 80px"></InputNumber>
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
            <Select v-model="style.fontFamily" style="width:200px" @on-change="changeFontFamily" placement="bottom">
              <Option v-for="item in base.fontFamily" :value="item.label" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row>
            字体大小: <InputNumber v-model="style.fontSize" @on-change="changeFontSize" placeholder="width" style="width: 80px"></InputNumber>
            字体颜色: <ColorPicker v-model="style.color" @on-active-change="changeFontColor" />
          </Row>
        </TabPane>
        <TabPane label="多语言配置" name="multiLanguage">
          <Row>
          </Row>
          <Table :columns="base.tabelHeader" :data="tableValue"></Table>
        </TabPane>
        <TabPane label="导出" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { fontFamily, tabelHeader, defaultVal } from '@/common/config'
import Clipboard from 'clipboard'
import { query } from '@/common/utils'

let el = null
let path = null
let text = null

export default {
  name: 'svg',
  data () {
    return {
      base: {
        w: 0,
        h: 0,
        split: 0.5,
        d: 'M0 100 C 270 0, 540 0, 810 100',
        dasharray: '0',
        fontFamily: fontFamily.call(this),
        tabelHeader: tabelHeader.call(this)
      },
      style: {
        isShowStroke: '0',
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#000',
        dasharray: '0'
      },
      svgDom: null,
      svgCSS: null,
      isquerySource: false,
      tableValue: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      el = query('#svg')
      path = query('#myPath')
      text = query('#text')

      this.tableValue.push(defaultVal())
      const svg = el.getBoundingClientRect()
      this.base.w = svg.width
      this.base.h = svg.height
      // 获取字体默认样式
      this.style.color = text.style.fill
      setTimeout(() => {
        this.addDemo()
      }, 5000)
    },
    renderW (width) {
      el.style.width = width
      let list = this.base.d.split(' ')
      list[3] = parseInt(width / 3)
      list[5] = parseInt(width / 3 * 2)
      list[7] = width
      this.base.d = list.join(' ')
    },
    renderH (height) {
      el.style.height = height
      let list = this.base.d.split(' ')
      list[8] = list[1] = parseInt(height / 2)
      this.base.d = list.join(' ')
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
      this.style.color = text.style.fill = val
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
  &__content {
    flex: 3;
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
}

.ivu-row {
  margin: 10px 0;
}

svg {
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
