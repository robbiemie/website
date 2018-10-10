<template>
  <div class="artical">
    <header>
      <div class="artical__title">
        移动端 Message组件
      </div>
      <div class="artical__desc">
        更加轻量，一款基于Vue2.0的移动端Message UI组件
      </div>
      <a class="artical__github--url" href="https://github.com/yang657850144/vue-message">
        Github <img class="artical__github" src="https://makefriends.bs2dl.yy.com/bm1539174882949.png" />
      </a>
    </header>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'artical'
}
</script>

<style lang="scss" scoped>
.artical{
  color: #c7c7b9;
  width: 100%;
  min-height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  &__title{
    padding-top: 40px;
    color: rgba(0, 0, 0, 0.548);
    text-align: center;
    font-size: 60px;
    font-weight: bold;
  }
  &__desc {
    line-height: 80px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  &__github {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    &--url{
      padding: 2px 10px;
      position: fixed;
      display: flex;
      align-items: center;
      top: 10px;
      right: 10px;
      color:#000;
      font-weight: bold;
      border: 1px solid #000;
      border-radius: 30px;
    }
  }
}
</style>
