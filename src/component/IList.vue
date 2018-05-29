<template>
  <div class="IList-box">
    <img class="IList-icon" src="@/img/kxdIcon.png" v-if='!inApp' />
    <div class="IList-title"><span class="IList-title__text">{{ inApp ? '好友助力记录' : '帮Ta助力的好友'}}</span></div>
    <div class="IList-container list" >
      <div class="list__item" v-for="(item,index) in supportList" :key="index">
        <img  class="avatar" :src="item.helperHeaderUrl" alt="">
        <p class="nickname ell">{{item.helperName}}</p>
        <p class="timer">{{item.createTime | formatDate}}</p>
        <p class="scorenum">+{{item.challengeScore}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IList',
  data () {
    return {
    }
  },
  props: {
    inApp: {
      type: Boolean,
      default: true
    },
    supportList: {
      type: Array,
      default: _ => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/common/extend';
@import '~@/css/lib/reset';

.IList {
  &-icon {
    width: 134px;
    display: block;
    margin: 0 auto;
    margin-bottom: 12px;
  }
  &-title {

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &__text {
      // width: 662px;
      height: 44px;
      font-size: 30px;
      line-height: 44px;
      color: #ffe670;
      text-align: center;
    }
    &__text::before, &__text::after{
      display: inline-block;
      vertical-align: middle;
      margin: 0 18px;
      content: '';
      transform: scaleY(0.4);
      width: 205px;
      border: 1px solid #ffe670;

    }
  }
  &-container {
    display: flex;
    flex-direction: column;
  }
  &-box {
    .list {
      &__item {
        height: 83px;
        margin: 10px 18px;
        padding-right: 30px;
        border-radius: 83px;
        display: flex;
        align-items: center;
        .avatar {
          margin-left: 16px;
          width: 70px;
          height: 70px;
          border-radius: 70px;
        }
        .nickname {
          margin-left: 30px;
          flex: 2;
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-size: 28px;
          /** 不换行 */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
        .timer {
          flex:2;
          color: #d4d4d4;
          font-size: 24px;
          /** 不换行 */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
        .scorenum {
          flex: 1;
          text-align: right;
          color: #ffe670;
          font-size: 30px;
          /** 不换行 */
          white-space: nowrap;
          overflow: hidden;
        }
      }
      &__item:nth-child(2n+1) {
        background-color: rgba(255,255,255,0.1);
      }
    }
  }
}
</style>
