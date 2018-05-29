<template>
  <div class="slider__game-box">
    <div class="slider__game-list-title"></div>
    <swiper :options="gameListOption" ref="swiper">
      <swiper-slide v-for="(item,index) in gameList" :key="item.name">
        <div :class="['slider__game-corner','is-'+index]" v-if="index<3">
        </div>
        <div class="slider__game-item">
          <img :src="item.icon">
          <div class="slider__game-name">{{ item.name }}</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="slider__bottom-tip">
      <div class="slider__bottom-download" @click="$emit('downloadApp')"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const gameList = [
  {
    name: '五子棋',
    icon: '//makefriends.bs2dl.yy.com/bm1521020316867.png'
  },
  {
    name: '开心爱消除',
    icon: '//makefriends.bs2dl.yy.com/bm1521020752845.png'
  },
  {
    name: '最强大脑',
    icon: '//makefriends.bs2dl.yy.com/bm1518059823886.png'
  },
  {
    name: '摩天大楼',
    icon: '//makefriends.bs2dl.yy.com/bm1521021172175.png'
  },
  {
    name: '天空战记',
    icon: '//makefriends.bs2dl.yy.com/bm1521019883988.png'
  },
  {
    name: '抢奶酪',
    icon: '//makefriends.bs2dl.yy.com/bm1521019642087.png'
  },
  {
    name: '连连看',
    icon: '//makefriends.bs2dl.yy.com/bm1521019613321.png'
  }
]

export default {
  name: 'IGameList',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      gameListOption: {
        watchSlidesProgress: true,
        speed: 300,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        on: {
          tap: () => {
            this.$emit('downloadApp')
          }
        }
      },
      gameList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/common/extend';
@import '~@/css/lib/reset';
  .slider {
    &__game-list-title {
      width: 582px;
      height: 63px;
      margin: 0 auto 20px;
      background: url("~@/img/WithDraw/withDrawTitle.png") no-repeat;
      background-size: 100% 100%;
    }
    &__game-item {
      position: relative;
      width: 150px;
      height: 150px;
      transition: all 200ms;
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__game-name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 43px;
      text-align: center;
      line-height: 43px;
      color: #fff;
      background: rgba(0, 0, 0, .7);
      font-weight: bolder;
    }
    &__game-box {
      width: 100%;
      .swiper-slide {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        &-active {
          /*margin: 0 15px;*/
          .slider__game-item {
            width: 200px;
            height: 200px;
          }
          .slider__game-corner {
            bottom: 150px;
            left: -20px;
            transform: scale3d(1, 1, 1);
          }
        }
      }
      .swiper-container {
        width: 100%;
        height: 100%;
        overflow: initial;
      }
    }
    &__bottom-tip {
      position: relative;
      margin: 10px auto 8px;
      width: 735px;
      height: 83px;
      background: url("~@/img/WithDraw/bottom-tip.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__bottom-download {
      align-self: flex-end;
      margin-right: 10px;
      width: 154px;
      height: 54px;
    }
    &__game-corner {
      position: absolute;
      bottom: 130px;
      left: -10px;
      z-index: 10;
      width: 109px;
      height: 72px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: all 100ms;
      transform: scale3d(0.7, 0.7, 0.7);
      &.is-0 {
        background-image: url("~@/img/WithDraw/game-corner-1.png")
      }
      &.is-1 {
        background-image: url("~@/img/WithDraw/game-corner-2.png")
      }
      &.is-2 {
        background-image: url("~@/img/WithDraw/game-corner-3.png")
      }
    }
  }
</style>
