<template>
  <div class="page" id="app">
    <swiper class="mySwiper" :options="swiperOption" ref="mySwiper" @touchmove="touchmove">
      <!-- slides -->
      <swiperSlide>
        <section class="section section--1">
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
        <section class="section section--2"></section>
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
        initialSlide: 0,
        direction: 'vertical',
        effect: 'flip',
        on: {
          touchMove: () => {
            console.log('e')
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
    touchmove (e) {
      console.log('e', e)
    }
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
.mySwiper {
  height: 100%;
}
.section {
  height: 100%;
  &--1 {
    // transform: translate3d(0,-50%,0);
  }
  &--2 {
    background: red;
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
