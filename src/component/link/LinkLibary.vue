<template>
  <div class="linklibary">
    <router-link class="linklibary__back--url"  to="/lib">
      GoBack &nbsp;<img class="linklibary__github" style="width:30px;height:30px;borderRadius:30px;" src="~@/img/portfolio/1.svg" />
    </router-link>
  </div>
</template>

<style lang="scss">
.linklibary {
  &__back {
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
      font-size: 16px;
      border: 1px solid #000;
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
