<template>
  <div class="IHeader-box">
    <div class="IHeader-item">HOME <div class="mask"></div></div>
    <div class="IHeader-item">ABOUT <div class="mask"></div></div>
    <div class="IHeader-item">WORK <div class="mask"></div></div>
    <div class="IHeader-item">CONTACT <div class="mask"></div></div>
  </div>
</template>

<script>
export default {
  name: 'IHeader',
  data () {
    return {
    }
  },
  props: {
  }
}
</script>

<style lang="scss">

.IHeader {
  &-box {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  &-item {
    position: relative;
    flex: 1;
    height: 100%;
    line-height: 150px;
    text-align: center;
    vertical-align: middle;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Jua',sans-serif;
    // font-family: Georgia,sans-serif, serif;
    color: #756651;
    background-color: rgba(112, 112, 112, 0.2);
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
  &-item:not(:first-child)::after {
    content: '';
    display: block;
    float: left;
    width: 1px;
    height: 100%;
    background: #ccc;
  }
  &-item:hover > .mask{
    height: 100%;
    transition: 0.3s height ease-out;
    // box-shadow: 10px 10px 15px rgba(126, 125, 125, 0.1);
  }
  &-item:hover {
    color:#fff;
  }
}

@media screen and (max-width: 700px){

  .IHeader {
    &-box {
      display: none;
    }
  }
}

</style>
