<template>
  <div class="page" id="app">
    <swiper class="mySwiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiperSlide>
        <section class="section section--1 section1">
          <div class="page__top">
            <SvgText/>
          </div>
          <div class="page__bottom">
            <SvgLine/>
            <div class="page__wrap">
              <div class="page__arrow page__arrow--1"></div>
              <div class="page__arrow page__arrow--2"></div>
              <div class="page__arrow page__arrow--3"></div>
            </div>
            <div class="page__content">
              <div class="page__person"></div>
              <div class="page__round"></div>
            </div>
          </div>
        </section>
      </swiperSlide>
      <swiperSlide>
        <section class="section section--2 section2">
          <div class="section2__title">One more thing</div>
          <div class="section2__desc">I love work.</div>
          <div class="section2__svg">
            <svg class="section2__svg--cell" viewBox="0 0 200 400" preserveAspectRatio="none">
              <defs>
                <path id="gentle-content" class="section2__svg--path"></path>
              </defs>
              <g class="svgline__parallax">
                <use xlink:href="#gentle-content" x="0" y="0"></use>
              </g>
            </svg>
            <div class="section2__menu">
              <div class="section2__item section2__item1">
                <div class="section2__item--text">item1</div>
              </div>
              <div class="section2__item section2__item2">
                <div class="section2__item--text">item1</div>
              </div>
              <div class="section2__item section2__item3">
                <div class="section2__item--text">item1</div>
              </div>
              <div class="section2__item section2__item4">
                <div class="section2__item--text">item1</div>
              </div>
            </div>
            <div class="section2__point">
              <div class="section2__point--item"></div>
            </div>
          </div>
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

export default {
  name: 'app',
  data () {
    return {
      swiperOption: {
        initialSlide: 1,
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
  directives: {
    bind (el) {

    }
  },
  components: {
    swiper,
    swiperSlide,
    SvgText,
    SvgLine
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
@import '~@/css/index';
@keyframes scaleArrow {
  to {
    opacity: 0.8;
    transform: scale(0.85);
  }
}
@keyframes flash {
  to {
    opacity: 1;
    box-shadow: 0 0 50px rgb(33, 216, 16);
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
  &__point {
    position: absolute;
    right: 20px;
    top: calc(50% - 10px);
    border: 3px solid rgb(33, 216, 16);
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    animation: flash 2s infinite ease;
    &--item {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      opacity: 0;
      background: rgb(33, 216, 16);
      animation: flash 2s infinite ease-in;
    }
  }
  &__menu {
    position: absolute;
    color: #000;
    top: calc(50% - 150px);
    right: 0;
    width: 200px;
    height: 300px;
    transform: translateX(300px);
    transition: transform 1.4s ease-out;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background: #fff;
    z-index: 999;
  }
  &__item {
    margin: 20px 0;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  &__svg{
    position: absolute;
    right: 0;
    font-size: 24px;
    color: #fff;
    font-family:Arial, Helvetica, sans-serif;
    &--cell {
      fill: none;
      stroke: none;
      width: 400px;
      height: 800px;
    }
    &--path {
      fill: #52a7ce;
      d: path('M200,0 C 200,50  200,50 180,100 Q 160,150 160,200 Q 160,250 180,300 C 200,350 200,350 200,400');
      transition: d 0.8s cubic-bezier(0.85, 0.21, 0.165, 0.78);
    }
  }
  &__svg:hover &__svg--path{
    d: path('M200,0 C 200,50  200,50 130,100 Q 60,150 60,200 Q 60,250 130,300 C 200,350 200,350 200,400');
    transition: d 0.8s cubic-bezier(0.85, 0.21, 0.165, 0.78);
  }
  &__svg:hover &__menu {
    transform: translateX(0px);
    transition: transform 1.4s ease;
  }

}
.page{
  position: relative;
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
