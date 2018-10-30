<template>
<div class="Libary">
  <section class="Libary__content">
    <div class="Libary__title">
      Libary
    </div>
    <div class="Libary__desc">
      Selected front-end development projects.
    </div>
    <div class="Libary__list">
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--1"></div>
          <router-link to="/lib/messages">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">preview</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--2"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--3"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--4"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--5"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--6"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--7"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--8"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="Libary__item Libary__item">
        <div class="Libary__item--wrap">
          <div class="Libary__item--common Libary__item--9"></div>
          <router-link to="/lib">
            <div class="Libary__item--common Libary__item--preview1">
              <div class="Libary__item--content">Oops!</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <Menus/>
</div>
</template>

<script>
import Menus from '@/component/Menu'

export default {
  name: 'Libary',
  components: {
    Menus
  }
}
</script>

<style lang="scss">
@import '~@/css/index';
@import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
.Libary {
  width: 100%;
  height: 100%;
  background: #9be29b;
  &__title {
    height: 100px;
    line-height: 100px;
    font-size: 64px;
    color: #1d97bf;
    font-weight: bold;
    text-align: center;
    font-family: 'Spicy Rice', cursive;
  }
  &__desc {
    padding-left: 100px;
    height: 180px;
    line-height: 180px;
    font-size: 28px;
    color: #ff6680;
    font-weight: bold;
  }
  &__list {
    margin: 0 auto;
    width: 1200px;
    height: 1000px;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    overflow: hidden;
  }
  &__item {
    margin: 10px;
    width: 360px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #01CD9F;
    &--wrap {
      width: 340px;
      height: 280px;
      border-radius: 20px;
      border: 4px solid #fff;
      background: #ccc;
      overflow: hidden;
    }
    &--common {
      transform: translateY(0);
      transition: transform 1s ease-out;
    }
    &--content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 60px;
      color: #fff;
      font-weight: bold;
      background: rgba($color: #000000, $alpha: 0.5)
    }
    &--preview1 {
      height: 100%;
      background: url(~@/img/libary/messages/preview.png) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--1 {
      height: 100%;
      background: url(~@/img/portfolio/1.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--2 {
      height: 100%;
      background: url(~@/img/portfolio/2.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--3 {
      height: 100%;
      background: url(~@/img/portfolio/3.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--4 {
      height: 100%;
      background: url(~@/img/portfolio/4.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--5 {
      height: 100%;
      background: url(~@/img/portfolio/5.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--6 {
      height: 100%;
      background: url(~@/img/portfolio/6.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--7 {
      height: 100%;
      background: url(~@/img/portfolio/7.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--8 {
      height: 100%;
      background: url(~@/img/portfolio/8.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &--9 {
      height: 100%;
      background: url(~@/img/portfolio/9.svg) no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  &__item:hover &__item--common {
    transform: translateY(-100%);
    transition: transform 1s ease-in;
  }
}
</style>
