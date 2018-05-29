<template>
  <div class="view-work">
    <div class="view__circle"></div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @keyframes circle {
    0% {
      width: 20px;
      height: 20px;
      border-radius: 20px;
    }
    100% {
      width: 900px;
      height: 900px;
      border-radius: 900px;
      opacity: 0;
    }
  }

  @keyframes gradientBgColor {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 20% 50%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  .view {
    &-work {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg,#8914d3,#00d6fe,#8914d3);
      background-size: 600% 600%;
      animation: gradientBgColor 12s linear infinite;
    }
    &__circle {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: rgba(255,255,255,0.3);
      box-shadow: 0 0 20px 20px rgba(255,255,255,0.2);
      animation: circle 6s ease infinite;
    }
  }
</style>
