<template>
  <div class="svg">
    <div class="svg__content">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <!-- 三次贝塞尔曲线 -->
        <path id="myPath" :d="base.d" stroke="black" fill="transparent"/>
        <text id="text" font-family="Verdana" :font-size="style.fontSize"  text-anchor="middle" style="fill:#000;" >
          <textPath xlink:href="#myPath" startOffset="50%">
            {{tableValue[0] && tableValue[0].text}}
          </textPath>
        </text>
      </svg>
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
            <Button type="primary" size="small" @click="add">+ 继续添加</Button>
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
        d: 'M0 100 C 270 0, 540 0, 810 100',
        fontFamily: fontFamily.call(this),
        tabelHeader: tabelHeader.call(this)
      },
      style: {
        isShowStroke: '1',
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#000'
      },
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

      const svg = el.getBoundingClientRect()
      this.base.w = svg.width
      this.base.h = svg.height
      // 获取字体默认样式
      this.style.color = text.style.fill
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
    add () {
      console.log('add', this.tableValue)
      this.tableValue.push(defaultVal())
    },
    delete (index) {
      this.tableValue.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
