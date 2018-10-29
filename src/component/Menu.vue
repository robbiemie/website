<template>
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
        <div class="section2__item--common section2__item--icon"><div class="section2__item--icon1"></div></div>
        <div class="section2__item--common section2__item--text"><router-link to="/">Home</router-link></div>
      </div>
      <div class="section2__item section2__item2">
        <div class="section2__item--common section2__item--icon"><div class="section2__item--icon2"></div></div>
        <div class="section2__item--common section2__item--text"><router-link to="/portfolio">Portfolio</router-link></div>
      </div>
      <div class="section2__item section2__item3">
        <div class="section2__item--common section2__item--icon"><div class="section2__item--icon3"></div></div>
        <div class="section2__item--common section2__item--text"><router-link to="/blog">Blog</router-link></div>
      </div>
      <div class="section2__item section2__item4">
        <div class="section2__item--common section2__item--icon"><div class="section2__item--icon4"></div></div>
        <div class="section2__item--common section2__item--text"><router-link to="/lib">Libary</router-link></div>
      </div>
    </div>
    <div class="section2__point">
      <div class="section2__point--item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@keyframes flash {
  to {
    transform: scale(1);
    box-shadow: 0 0 50px rgb(33, 216, 16);
  }
}

.section2 {
  &__svg{
    position: absolute;
    right: 0;
    top: calc(50% - 400px);
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
  &__point {
    position: absolute;
    right: 20px;
    top: calc(50% - 10px);
    border: 0px solid rgb(214, 129, 214);
    background-color: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    animation: flash 2s infinite ease;
    overflow: hidden;
    &--item {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: scale(0);
      background: rgb(74, 76, 77);
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
    margin: 20px auto;
    height: 50px;
    width: 150px;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
    &--common {
      height: 50px;
      line-height: 50px;
      transform: translateY(0px);
      transition: transform 1s ease;
    }
    &--icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--icon1 {
      width: 60px;
      height: 60px;
      background: url(~@/img/icons/paint.png) no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &--icon2 {
      width: 60px;
      height: 60px;
      background: url(~@/img/icons/cat.svg) no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &--icon3 {
      width: 40px;
      height: 40px;
      background: url(~@/img/icons/heart.png) no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &--icon4 {
      width: 50px;
      height: 50px;
      background: url(~@/img/icons/dog.png) no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &--text {
      a {
        color: rgb(85, 26, 139);
      }
      border: 3px solid transparent;
      border-left-color: #37474f;
      border-right-color: #37474f;
    }
  }
  &__item:hover &__item--common{
    transform: translateY(-50px);
    transition: transform 1s cubic-bezier(0.75, 0, 0.125, 1);
  }
}
</style>
