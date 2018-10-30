<template>
  <div class="linkgithub">
    <a class="linkgithub__github--url" href="https://github.com/yang657850144">
      Github <img class="linkgithub__github" style="width:34px;height:34px;" src="https://makefriends.bs2dl.yy.com/bm1539174882949.png" />
    </a>
  </div>
</template>

<style lang="scss">
.linkgithub {
  &__github {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    &--url{
      position: fixed;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      padding: 2px 10px;
      color:#000;
      font-weight: bold;
      border: 1px solid rgba(34, 33, 33, 0.685);
      border-radius: 30px;
    }
    &--url:hover {
      color: #fff;
      background: rgba(31, 30, 30, 0.6);
      transition: background 1s ease;
    }
  }
}
</style>
