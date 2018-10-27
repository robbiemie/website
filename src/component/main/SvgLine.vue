<template>
  <div class="svgline">
    <svg class="svgline__cell" viewBox="0 50 200 50" preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave" d="
        M0,70
        Q 75 50, 150 70
        T 300 70
        T 450 70
        T 600 70"></path>
      </defs>
      <g class="svgline__parallax">
        <use class="svgline__use svgline__use--1" xlink:href="#gentle-wave" x="0" y="0"></use>
        <use class="svgline__use svgline__use--2" xlink:href="#gentle-wave" x="0" y="2"></use>
        <use class="svgline__use svgline__use--3" xlink:href="#gentle-wave" x="0" y="4"></use>
        <use class="svgline__use svgline__use--4" xlink:href="#gentle-wave" x="0" y="6"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svgline'
}
</script>

<style lang="scss" scoped>
@keyframes waveLine {
  0% {
  }
  100% {
      transform: translateX(-416px);
  }
}
.svgline {
  position: absolute;
  bottom: 0px;
  width: 100%;
  &__cell {
    display:block;
    width:100%;
    height:480px;
  }
  &__use {
    fill: none;
    stroke: #fff;
    stroke-width: 0.2;
    opacity: 0.8;
    animation: waveLine 6s linear infinite;
    &--1{
      stroke: #B5FFFC;
    }
    &--2{
      stroke: #A4E887;
      animation-delay: 1s;
    }
    &--3{
      stroke: #E8987E;
      animation-delay: 2s;
    }
    &--4{
      stroke: #EA77FF;
      animation-delay: 3s;
    }
  }
}
</style>
