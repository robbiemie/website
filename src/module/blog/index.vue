<template>
<div class="Blog">
  <section class="Blog__content">
    <div class="Blog__title">
      Blog
    </div>
    <div class="Blog__desc">
      Click and enter my blog.
    </div>
    <a href="https://yang657850144.github.io/lucky.github.io/">
      <div class="Blog__list">
        <div class="Blog__wrap"></div>
        <div class="Blog__mask">Preview</div>
      </div>
    </a>
  </section>
  <Menus/>
</div>
</template>

<script>
import Menus from '@/component/Menu'

export default {
  name: 'Blog',
  components: {
    Menus
  }
}
</script>

<style lang="scss">
@import '~@/css/index';
@import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
.Blog {
  width: 100%;
  height: 100%;
  background: #ffdb66;
  &__title {
    height: 100px;
    line-height: 100px;
    font-size: 64px;
    color: #70684c;
    font-weight: bold;
    text-align: center;
    font-family: 'Spicy Rice', cursive;
  }
  &__desc {
    padding-left: 100px;
    height: 180px;
    line-height: 180px;
    font-size: 28px;
    color: #70684c;
    font-weight: bold;
  }
  &__list {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 1000px;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    overflow: hidden;
    border: 4px solid #70684c;
    border-radius: 20px;
  }
  &__wrap {
    width: 100%;
    height: 100%;
    background: url(~@/img/blog/preview.png) no-repeat;
    background-size: cover;
    transform: scale(1);
    transition: transform 1s ease-out;
  }
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.5);
  }
  &__list:hover &__wrap {
    transform: scale(1.2);
    transition: transform 2s ease-in;
  }
}
</style>
