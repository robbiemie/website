<template>
  <div class="page" id="app">
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
    </div>
  </div>
</template>

<script>
import SvgText from '@/component/main/SvgText'
import SvgLine from '@/component/main/SvgLine'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    SvgText,
    SvgLine
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import '~@/css/index';
@keyframes scaleArrow {
  to {
    opacity: 0.8;
    transform: scale(0.8);
  }
}
.page{
  &__top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    background: #000;
    background: #ce526f;
  }
  &__bottom{
    position: absolute;
    left: 0;
    bottom: 0;
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
}
</style>
