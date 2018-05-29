<template>
  <div class="withDraw-box">
    <swiper :options="withDrawOption">
      <swiper-slide class="swiper-no-swiping" v-for="(slide,index) in hotList" :key="index">
        <div class="withDraw__item pr">
          <img class="item__avatar pr" :src="slide.userAvatar" alt="">
          <div class='item__inner pr'>
            <p class='item__nick ell'>{{ slide.userName }}</p>
            <p class="item__red">领取{{ slide.amount * 100 }}红包</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'IWithDraw',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    hotList: {
      type: Array,
      default: _ => []
    }
  },
  data () {
    return {
      withDrawOption: {
        direction: 'vertical',
        autoplay: true,
        noSwiping: true,
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/common/extend';
@import '~@/css/lib/reset';

.withDraw{
 &-box {
    // width: 374px;
    height: 72px;
    .swiper-container {
      height: 100%;
    }
 }
 &__item {
    // width: 374px;
    height: 72px;
    display: inline-flex;
    align-items: center;
 }
}
.item {
  &__avatar {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    border: 3px solid #6d91cc;
    z-index: 3;
  }
  &__inner {
    z-index: 2;
    // width: 333px;
    height: 63px;
    background-color: rgba(55, 121, 255, 0.6);
    border-radius: 63px;
    display: flex;
    padding-left: 46px;
    box-sizing: border-box;
    margin-left: -42px;
    padding-right: 20px;
  }
  &__nick {
    color: #fff;
    font-size: 24px;
    line-height: 63px;
    margin-right: 12px;
    max-width: 220px;
  }
  &__red {
    color: #fff;
    font-size: 24px;
    line-height: 63px;
    height: 63px;
  }
}

</style>
