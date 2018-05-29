<template>
  <div class="IFooter-box">
    <router-link to="home" class="IFooter-item"><span>HOME</span> <div class="mask"></div></router-link>
    <router-link to="about" class="IFooter-item"><span>ABOUT</span> <div class="mask"></div></router-link>
    <router-link to="work" class="IFooter-item"><span>WORK</span> <div class="mask"></div></router-link>
    <router-link to="contact" class="IFooter-item"><span>CONTACT</span> <div class="mask"></div></router-link>
  </div>
</template>

<script>
export default {
  name: 'IFooter',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 700px){
  .IFooter {
    &-box {
      display: none;
    }
  }
}

@keyframes hoverBtn {
  0% {
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-20px);
  }
  50% {
    background-color: #fff;
  }
  100% {
    opacity: 0.8;
    transform: translateY(0);
    box-shadow: 0 0 50px 10px #fffff5;
    background-color: #fff;
  }
}

.IFooter {
  &-box {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0 100px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
  &-item {
    position: relative;
    flex: 1;
    height: 100%;
    display: inline-block;
    line-height: 100px;
    text-align: center;
    // vertical-align: middle;
    font-size: 30PX;
    font-weight: bold;
    margin-left: 10px;
    font-family: 'Jua',sans-serif;
    // font-family: Georgia,sans-serif, serif;
    color: #fff;
    // border: 3px solid #fff;
    border-radius: 100px;
    background-color: rgba(112, 112, 112, 0.3);
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      width: 100%;
      background: rgba(112, 112, 112, 0.2);
      border-radius: 5px;
    }
  }
  /** 分割线 */
  // &-item:not(:first-child)::after {
  //   content: '';
  //   display: block;
  //   float: left;
  //   width: 1px;
  //   height: 100%;
  //   background: #ccc;
  // }
  // &-item:hover > .mask{
  //   height: 100%;
  //   transition: 0.3s height ease-out;
  // }
  &-item:hover{
    // animation-name: hoverBtn;
    // animation-play-state: paused;
    // animation-duration: 0.5s;
    // animation-iteration-count: 2;
    // animation-timing-function: ease-out;
    color: #2c3e50;
    animation: hoverBtn 0.5s ease-out forwards;
  }
}

</style>
