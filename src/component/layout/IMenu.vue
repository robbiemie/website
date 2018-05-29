<template>
  <div class="IMenu-box">
    <div class="IMenu-btn"></div>
    <div class="IMenu-main container">
      <div class="container-title">MENU</div>
      <div class="container-item">HOME <div class="mask"></div></div>
      <div class="container-item">ABOUT <div class="mask"></div></div>
      <div class="container-item">WORK <div class="mask"></div></div>
      <div class="container-item">CONTACT <div class="mask"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IMenu',
  data () {
    return {
    }
  },
  props: {
  }
}
</script>

<style lang="scss" scoped>
.IMenu {
  &-box {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350PX;
    overflow: hidden;
  }
  &-btn {
    position: absolute;
    opacity: 0;
    top: 50PX;
    right: 50PX;
    width: 60PX;
    height: 60PX;
    border-radius: 60PX;
    border: 1PX solid #000;
    z-index: 1;
  }
  &-btn::before, &-btn::after {
    content: '';
    position: absolute;
    display: block;
    left: calc(100% - 48PX);
    width: 38PX;
    height: 1PX;
    background-color: #000;
  }
  &-btn::before {
    margin-top: calc(100% - 25PX);
  }
  &-btn::after {
    margin-top: calc(100% - 35PX);
  }
  &-btn:hover {
    border-color: #fff;
  }
  &-btn:hover::before{
    background-color: #fff;
    margin-top: calc(100% - 30PX);
    transform: rotate(-45deg);
    transform-origin: 19PX 0;
    transition: 0.5s transform ease-out;
  }
   &-btn:hover::after {
    background-color: #fff;
    margin-top: calc(100% - 30PX);
    transform: rotate(45deg);
    transform-origin: 19PX 0;
    transition: 0.5s transform ease-out;
   }
  &-btn:hover + .container {
    right: 0;
    transition: 0.5s right ease-out;
  }
  &-main {
    position: absolute;
    right: -100%;
    opacity: 1;
    width: 100%;
    height: 100%;
    padding-top: 200PX;
    font-size: 30PX;
    color:#ccc;
    background-image: url('~@/img/sliderBar.png');
    background-size: contain;
  }
}
.container {
  &-title {
    text-align: center;
    font-size: 54PX;
    margin-bottom: 50PX;
    font-family: 'Jua',sans-serif;
  }
  &-title::after {
    display: block;
    content: '';
    width: 100%;
    height: 1PX;
    transform: scaleX(0.3) scaleY(1);
    background-color: #000;
  }
  &:hover &-title::after {
    transform: scaleX(1) scaleY(0.2);
    transition: 0.5s transform ease-out;
  }
  &-item {
    position: relative;
    height: 100PX;
    line-height: 100PX;
    text-align: center;
    font-family: 'Jua',sans-serif;
  }
  &-item::after {
    position: absolute;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    background-color: rgba(196, 190, 190, 0.3);
  }
  &-item:hover::after{
    transform: scaleX(1);
    transition: 0.5s transform ease-out;
  }
}

@media screen and (max-width: 750px){
  .IMenu {
      &-btn {
        opacity: 1;
        transition: 0.5s opacity ease-out;
      }
  }
}
</style>
