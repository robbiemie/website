<template>
  <div class="view-home">
    <div class="view-container main">
      <IMenu class="main__menu"></IMenu>
      <div class="main__content">
        <div class="main__content-left"></div>
        <div class="main__content-center center">
          <div class="center__logo">
            <img  src="@/img/icon.png" alt="">
            Charles's & Yang
            <div class="center__text" >A merry heart goes all the way.</div>
          </div>
          <ICloud></ICloud>
        </div>
        <div class="main__content-right"></div>
      </div>
      <IFooter class="main__footer"></IFooter>
    </div>
    <div class="view-video">
      <video ref="vd" autoplay="autoplay" preload="auto" loop src='https://makefriends.bs2dl.yy.com/bm1539173365344.mp4'></video>
    </div>
    <transition name="fade">
      <IMask v-if="loadingComplete"></IMask>
    </transition>
  </div>
</template>

<script>
import IFooter from '@/component/layout/IFooter'
import IMenu from '@/component/layout/IMenu'
import ICloud from '@/component/ICloud'
import IMask from '@/component/IMask'

export default {
  name: 'Index',
  components: {
    IFooter,
    IMenu,
    ICloud,
    IMask
  },
  data () {
    return {
      loadingComplete: true
    }
  },
  mounted () {
    let self = this
    setTimeout(() => {
      self.loadingComplete = false
      this.$refs.vd.play()
    }, 1000)
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '~@/css/index.scss';

.view {
  &-home {
    user-select: none;
    width: 100vw;
    height: 100vh;
  }
  &-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &__menu {
    z-index: 1;
  }
  &__footer {
    flex: 0.5;
    z-index: 1;
    margin-bottom: 100px;
  }
  &__content {
    flex: 5;
    display: flex;
    z-index: 1;
    &-left {
      flex: 1;
      // background: yellow;
    }
    &-center {
      flex: 4;
      // background: blue;
    }
    &-right {
      flex: 1;
      // background: black;
    }
  }

  @media screen and (max-width:750px) {
    .main {
      &__content {
        display: flex;
        flex-direction: column;
      }
    }
    .center {
      &__logo {
        display: none;
      }
    }
  }

}
.center {
  position: relative;
  &__logo {
    position: absolute;
    top: 170PX;
    height: 60px;
    line-height: 60px;
    font-size: 50PX;
    font-family: 'Playball' sans-serif;
  }
  &__logo > img{
    display: inline-block;
    width: 50PX;
    height: 50PX;
    margin-right: 20px;
  }
  &__text {
    font-size: 32PX;
    margin-top: 50px;
  }
  &__text:hover {
    transform: scale(1.1);
    // box-shadow: 2px 2px 2px 2px;
    transition: 0.5s transform ease-out;
  }
  &__text::after {
    content: '';
    display: block;
    width: 100%;
    height: 1PX;
    background-color: #000;
    transform: scaleY(0.5);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
