<template>
  <div class="clouds">
    <div class="clouds__default cloud"></div>
    <div class="clouds__high cloud"></div>
  </div>
</template>

<script>
export default {
  name: 'ICloud'
}
</script>

<style lang="scss" scoped>

.cloud {
  position: relative;
  margin: 50px auto;
  opacity: 0.3;
  width: 200px;
  height: 60px;
  border-radius: 200px;
  z-index: -1;
  background-color: #fff;
}

.cloud::before, .cloud::after {
  position: relative;
  content:'';
  background-color: #fff;
  width: 100px;
  height: 80px;
  top: -15px;
  left: 10px;
  display: block;
  border-radius: 100px;
  transform: rotate(30deg)

}
.cloud::after {
  left: 60px;
  top: -100px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
}

.cloud:nth-child(2n) {
  margin:50px 0px;
}

.clouds{
  position: absolute;
  &__default {
    animation: moveclouds 35s ease-in-out infinite;
  }
  &__high {
    animation: moveclouds 20s ease-in-out alternate-reverse infinite;
  }
}

@keyframes moveclouds {
  0% {left: 2000px}
  100% {left: -1000px; opacity: 0.5;}
}

</style>
