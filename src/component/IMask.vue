<template>
<div class="mask">
  <div class="mask_content">
    <div class="mask_title">
      <span class="mask_title__item">L</span>
      <span class="mask_title__item">o</span>
      <span class="mask_title__item">a</span>
      <span class="mask_title__item">d</span>
      <span class="mask_title__item">i</span>
      <span class="mask_title__item">n</span>
      <span class="mask_title__item">g</span>
      <span class="mask_title__item">.</span>
      <span class="mask_title__item">.</span>
      <span class="mask_title__item">.</span>
    </div>
  </div>
  <div class="mask_shadow" @click.prevent.stop='onClickShadowMask'></div>
</div>
</template>

<script>

export default {
  name: 'IMask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    onClickMask: {
      type: Function,
      default: _ => {}
    }
  },
  methods: {
    onClickShadowMask () {
      this.onClickMask()
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/common/extend';

@keyframes repeatCircle {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: 0;
    border-width: 8px;
    transform: scale(1);
  }
}

@keyframes jumpText {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10PX);
  }
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;
  &_shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #FFFFF5
  }
  &_title {
    width: 100%;
    font-size: 50PX;
    text-align: center;
    font-family: 'Titan One', cursive;
    &__item {
      display: inline-block;
      animation: jumpText 0.52s infinite ease alternate;
    }
    &__item:nth-child(2n){
      animation-delay: 0.25s;
    }
  }
  &_content {
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    width: 500px;
    margin:0 auto;
    height: 500px;
    box-sizing: border-box;
    z-index: 1001;
  }
  &_content::after, &_content::before{
    display: block;
    content: "";
    opacity: 0;
    transform: scale(0);
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    width: 150px;
    height: 150px;
    border: 5px solid #666666;
    border-radius: 150px;
    box-shadow: 0 0 49px #666666, inset 0 0 49px #666666;
    background-color: transparent;
  }
  &_content::after {
    animation: repeatCircle 2.5s ease-out infinite;
  }
  &_content::before {
    animation: repeatCircle 2.5s ease-out infinite 2.5s;

  }
}
</style>
