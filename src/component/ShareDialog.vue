<template>
<div class="share pf" v-if='show'>
  <div class='share_mask pa' @click.prevent.stop='onClickShadow'></div>
  <div class='share_cont pa'>
    <div class='share_close pa' @click.prevent.stop='onClickClose'></div>
    <p class='share_title tc'>邀请好友帮我上分</p>
    <p class='share_tip tc'>好友首次游戏的分数直接叠加到你的分数上</p>
    <ul class='share_list'>
      <li class='share_item' @click.prevent.stop='onClickShareIcon(5)'></li>
      <li class='share_item' @click.prevent.stop='onClickShareIcon(2)'></li>
      <li class='share_item' @click.prevent.stop='onClickShareIcon(3)'></li>
      <li class='share_item' @click.prevent.stop='onClickShareIcon(1)'></li>
    </ul>
  </div>
</div>
</template>

<script>
import Util from '@/common/Util'
import Config from '@/common/Config'
import Client from '@/common/Client'
import { mapState } from 'vuex'

function getShareUrl (uid) {
  const { gid } = Util.getUrlParameters()
  const baseUrl = {
    dev: '//langrensha-test.yy.com/a/singlegameluckybag/out.html',
    test: '//langrensha-test.yy.com/a/singlegameluckybag/out.html',
    prod: '//langrensha.yy.com/a/singlegameluckybag/out.html'
  }[Config.ENV]
  return `${baseUrl}?inviteUid=${uid}&gid=${gid}`
}
export default {
  name: 'Share',
  props: {
    show: Boolean,
    onClose: Function,
    onClickMask: {
      type: Function,
      default: _ => {}
    }
  },
  computed: {
    ...mapState(['uid'])
  },
  methods: {
    onClickShareIcon (type) {
      Client.nativeShare({
        url: getShareUrl(this.uid),
        content: '',
        title: '',
        type
      })
    },
    onClickShadow () {
      this.onClose && this.onClose()
      this.$store.dispatch('hideShareDialog')
    },
    onClickClose () {
      this.onClose && this.onClose()
      this.$store.dispatch('hideShareDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/lib/_mixin.scss';

.share {
  z-index: 9000;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  &_mask {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: #000;
    opacity: 0.6;
  }
  &_cont {
    box-sizing: border-box;
    width: 680px;
    padding: 60px 40px;
    background-color: #fff;
    border-radius: 18px;
    bottom: 70px;
    left: 35px;
  }
  &_close {
    @include bg('Dialog/closeBtn', 25px, 25px)
    top: 17px;
    right: 20px;
  }
  &_title {
    font-size: 36px;
    font-weight: bold;
    color: #000;
    line-height: 56px;
  }
  &_tip {
    font-size: 30px;
    color: #000;
    line-height: 56px;
  }
  &_list {
    margin-top: 40px;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
  }
  &_item {
    &:nth-child(1) {
      @include bg('Dialog/btn-qzone@2x', 90px, 90px)
      &:active {
        @include bg('Dialog/btn-qzone-down@2x', 90px, 90px)
      }
    }
    &:nth-child(2) {
      @include bg('Dialog/btn-wx-moment@2x', 90px, 90px)
      &:active {
        @include bg('Dialog/btn-wx-moment-down@2x', 90px, 90px)
      }
    }
    &:nth-child(3) {
      @include bg('Dialog/btn-qq@2x', 90px, 90px)
      &:active {
        @include bg('Dialog/btn-qq-down@2x', 90px, 90px)
      }
    }
    &:nth-child(4) {
      @include bg('Dialog/btn-weixin@2x', 90px, 90px)
      &:active {
        @include bg('Dialog/btn-weixin-down@2x', 90px, 90px)
      }
    }
  }
}
</style>
