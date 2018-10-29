<template>
<div class="portfolio">
  <section class="portfolio__content">
    <div class="portfolio__title">
      portfolio
    </div>
    <div class="portfolio__desc">
      Selected front-end development projects.
    </div>
    <div class="portfolio__list">
      <div class="portfolio__item">
        <div class="portfolio__item--wrap">

        </div>
      </div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
      <div class="portfolio__item"></div>
    </div>
  </section>
  <Menus/>
</div>
</template>
<script>
import Menus from '@/component/Menu'
export default {
  name: 'portfolio',
  components: {
    Menus
  }
}
</script>

<style lang="scss">
@import '~@/css/index';
@import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
.portfolio {
  width: 100%;
  height: 100%;
  background: #fffbcc;
  &__content {
  }
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
    }
  }
}
</style>
