<template>
  <div class="page" id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  directives: {
    bind (el) {

    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '~@/css/index';

.page {
  position: relative;
  overflow: hidden;
  background: #fff;
}
</style>
