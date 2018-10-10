<template>
  <div class="artical">
    <header>
      <div class="artical__title">
        移动端 Message组件
      </div>
      <div class="artical__desc">
        更加轻量，一款基于Vue2.0的移动端Message UI组件
      </div>
      <a class="artical__github--url" href="https://github.com/yang657850144/vue-message">
        Github <img class="artical__github" src="https://makefriends.bs2dl.yy.com/bm1539174882949.png" />
      </a>
    </header>
    <div class="artical__content">
      <div class="artical__btn--main">功能演示</div>
      <div class="artical__list">
        <div class="artical__btn artical__btn--success" @click="success">成功</div>
        <div class="artical__btn artical__btn--error" @click="error">错误</div>
        <div class="artical__btn artical__btn--warning" @click="warning">警告</div>
        <div class="artical__btn artical__btn--info" @click="info">信息</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artical',
  methods: {
    success () {
      console.log(1)
      this.$Message.success('成功')
    },
    error () {
      console.log(2)
      this.$Message.error('错误')
    },
    warning () {
      console.log(3)
      this.$Message.warning('警告')
    },
    info () {
      console.log(4)
      this.$Message.info('信息')
    }
  }
}
</script>

<style lang="scss" scoped>
.artical{
  color: #c7c7b9;
  width: 100%;
  min-height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  &__title{
    padding: 60px;
    color: rgba(0, 0, 0, 0.548);
    text-align: center;
    font-size: 60px;
    font-weight: bold;
  }
  &__desc {
    line-height: 80px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
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
  &__content {
      margin-top: 300px;
  }
  &__btn {
    margin: 0 10px;
    color: #fff;
    font-weight: bold;
    &--main {
      margin: 0 auto;
      width: 120px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-radius: 46px;
      background: #000;
    }
    &--success {
      width: 120px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-radius: 46px;
      background: #19be6b;
    }
    &--error {
      width: 120px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-radius: 46px;
      background: #ed4014;
    }
    &--warning {
      width: 120px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-radius: 46px;
      background: #ff9900;
    }
    &--info {
      width: 120px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      border-radius: 46px;
      background: #2db7f5;
    }
  }
  &__list {
    margin: 0 auto;
    margin-top: 100px;
    height: 200px;
    width: 600px;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background: #7099a334;
  }
}
</style>
