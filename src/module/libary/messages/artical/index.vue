<template>
  <div class="artical">
    <header>
      <div class="artical__title">
        <LinkLibary/>
        {{$t('message.title')}}
      </div>
      <div class="artical__desc">
        {{$t('message.desc')}}
      </div>
      <div class="artical__trans">
        <span class="artical__trans--zh" @click="changeLang('zh')">中文</span>
        <span class="artical__trans--en" @click="changeLang('en')">English</span>
      </div>
      <a class="artical__github--url" href="https://github.com/yang657850144/vue-message">
        Github <img class="artical__github" src="https://makefriends.bs2dl.yy.com/bm1539174882949.png" />
      </a>
    </header>
    <div class="artical__content">
      <div class="artical__btn artical__btn--main artical__btn--theme1">{{$t('message.theme.type1')}}</div>
      <div class="artical__list artical__list--theme1">
        <div class="artical__btn artical__btn--success" @click="success(1)">{{$t('message.success')}}</div>
        <div class="artical__btn artical__btn--error" @click="error(1)">{{$t('message.error')}}</div>
        <div class="artical__btn artical__btn--warning" @click="warning(1)">{{$t('message.warning')}}</div>
        <div class="artical__btn artical__btn--info" @click="info(1)">{{$t('message.info')}}</div>
      </div>
    </div>
    <div class="artical__content">
      <div class="artical__btn artical__btn--main artical__btn--theme2">{{$t('message.theme.type2')}}</div>
      <div class="artical__list artical__list--theme2">
        <div class="artical__btn artical__btn--success" @click="success(2)">{{$t('message.success')}}</div>
        <div class="artical__btn artical__btn--error" @click="error(2)">{{$t('message.error')}}</div>
        <div class="artical__btn artical__btn--warning" @click="warning(2)">{{$t('message.warning')}}</div>
        <div class="artical__btn artical__btn--info" @click="info(2)">{{$t('message.info')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkLibary from '@/component/link/LinkLibary'
export default {
  name: 'artical',
  components: {
    LinkLibary
  },
  methods: {
    success (type = 1) {
      let content = this.$t('message.success')
      let opts
      if (type === 2) {
        opts = {
          content,
          themes: 'blackGold',
          styles: {
            fontSize: 24
          }
        }
      } else {
        opts = content
      }
      this.$Message.success(opts)
    },
    error (type = 1) {
      let content = this.$t('message.error')
      let opts
      if (type === 2) {
        opts = {
          content,
          themes: 'blackGold',
          styles: {
            fontSize: 24
          }
        }
      } else {
        opts = content
      }
      this.$Message.error(opts)
    },
    warning (type = 1) {
      let content = this.$t('message.warning')
      let opts
      if (type === 2) {
        opts = {
          content,
          themes: 'blackGold',
          styles: {
            fontSize: 24
          }
        }
      } else {
        opts = content
      }
      this.$Message.warning(opts)
    },
    info (type = 1) {
      let content = this.$t('message.info')
      let opts
      if (type === 2) {
        opts = {
          content,
          themes: 'blackGold',
          styles: {
            fontSize: 24
          }
        }
      } else {
        opts = content
      }
      this.$Message.info(opts)
    },
    changeLang (lang) {
      console.log('lang', lang, this.$i18n)
      this.$i18n.locale = lang
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
  &__trans {
      position: fixed;
      padding: 2px 20px;
      height: 34px;
      // width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 10px;
      right: 200px;
      color:#000;
      font-weight: bold;
      border: 1px solid #000;
      border-radius: 30px;
      cursor: pointer;
      span {
        margin: 0 10px;
      }

  }
  &__content {
      margin-top: 100px;
  }
  &__btn {
    margin: 0 10px;
    width: 120px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    border-radius: 46px;
    color: #fff;
    font-weight: bold;
    &--main {
      margin: 0 auto;
      width: 240px;
    }
    &--theme1 {
      color: #000;
      background: rgb(211, 190, 190);
    }
    &--theme2 {
      background: #000;
    }
    &--success {
      background: #19be6b;
    }
    &--error {
      background: #ed4014;
    }
    &--warning {
      background: #ff9900;
    }
    &--info {
      background: #2db7f5;
    }
    &--black {
      background: #000;
    }
  }
  &__list {
    margin: 0 auto;
    margin-top: 30px;
    height: 200px;
    width: 600px;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    &--theme1 {
      background: rgb(211, 190, 190);
    }
    &--theme2 {
      background: #000;
    }
  }
}
</style>
