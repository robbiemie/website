<template>
  <div class="linkportfolio">
    <router-link class="linkportfolio__back--url"  to="/portfolio">
      GoBack &nbsp;<img class="linkportfolio__github" style="width:34px;height:34px;borderRadius:34px;" src="~@/img/portfolio/1.svg" />
    </router-link>
  </div>
</template>

<style lang="scss">
.linkportfolio {
  &__back {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    &--url{
      position: fixed;
      top: 10px;
      left: 10px;
      display: flex;
      padding: 2px 10px;
      align-items: center;
      color:#000;
      font-weight: bold;
      border: 1px solid #ccc;
      border-radius: 30px;
      transition: background 1s ease;
    }
    &--url:hover {
      color: #fff;
      border-color: rgba(204, 204, 204,0.6);
      background: rgba(204, 204, 204,0.6);
      transition: background 1s ease;
    }
  }
}
</style>
