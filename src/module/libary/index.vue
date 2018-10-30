<template>
  <div class="libary">

    <router-link to="/lib/messages">123</router-link>
    <Menus/>
  </div>
</template>

<script>
import Menus from '@/component/Menu'
export default {
  name: 'Work',
  components: {
    Menus
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
</style>
