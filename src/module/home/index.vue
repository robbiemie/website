<template>
  <div class="home">
    <swiper class="mySwiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiperSlide>
        <section class="section section--1 section1">
          <div class="home__top">
            <SvgText/>
          </div>
          <div class="home__bottom">
            <SvgLine/>
            <div class="home__wrap">
              <div class="home__arrow home__arrow--1"></div>
              <div class="home__arrow home__arrow--2"></div>
              <div class="home__arrow home__arrow--3"></div>
            </div>
            <div class="home__content">
              <div class="home__person"></div>
              <div class="home__round"></div>
            </div>
          </div>
        </section>
      </swiperSlide>
      <swiperSlide>
        <section class="section section--2 section2">
          <div class="section2__title">One more thing</div>
          <div class="section2__desc">I love work.</div>
          <Menus/>
        </section>
      </swiperSlide>
    </swiper>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import SvgText from '@/component/main/SvgText'
import SvgLine from '@/component/main/SvgLine'
import Menus from '@/component/Menu'

export default {
  name: 'app',
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        direction: 'vertical',
        effect: 'flip',
        speed: 1000,
        mousewheel: true,
        on: {
          touchMove: () => {
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    SvgText,
    SvgLine,
    Menus
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
// 导入谷歌字体样式
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

@keyframes scaleArrow {
  to {
    opacity: 0.8;
    transform: scale(0.85);
  }
}
.mySwiper {
  height: 100%;
}
.section {
  height: 100%;
}
.section2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Press Start 2P';
  background: url(~@/img/bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  &__title {
    color: #fff;
    font-size: 40px;
    word-spacing: -20px;
    font-weight: bold;
    text-align: center;
  }
}
.home{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #fff;
  &__top {
    width: 100%;
    height: 50%;
    background: #000;
    background: #ce526f;
  }
  &__bottom{
    width: 100%;
    height: 50%;
    background: #000;
  }
  &__wrap {
    position: absolute;
    bottom: 100px;
    left: calc(50% - 20px);
    animation: scaleArrow 1s infinite linear;
  }
  &__arrow {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border: 3px solid transparent;
    border-left-color: #fff;
    border-bottom-color: #fff;
    &--1 {
      transform: translate(0px, 0px) rotate(-45deg);
    }
    &--2 {
      transform: translate(0px, -12px) rotate(-45deg);
    }
    &--3 {
      transform: translate(0px, -24px) rotate(-45deg);
    }
  }
  &__content {
    position: relative;
  }
  &__bottom:hover &__person{
    transform: translateX(40px);
    transition: transform 2s ease;
  }
  &__bottom:hover &__round{
    transform: translateY(-40px);
    transition: transform 2s ease;
  }
  &__person {
    position: absolute;
    width: 800px;
    height: 600px;
    top: 0;
    left: 0;
    transition: transform 2s ease;
    background: url(~@/img/person.png) no-repeat;
    background-size: contain;
    z-index: 1;
  }
  &__round {
    position: absolute;
    left: 100px;
    top: 20px;
    width: 800px;
    height: 600px;
    transition: transform 2s ease;
    background: url(~@/img/round.png) no-repeat;
    background-size: contain;
  }
}
</style>
