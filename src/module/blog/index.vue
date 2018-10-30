<template>
  <div class="blog">
    <router-link to="/blog/list">123</router-link>
    <Menus/>
  </div>
</template>

<script>
import Menus from '@/component/Menu'
export default {
  name: 'blog',
  components: {
    Menus
  }

}
</script>

<style lang="scss" scoped>

</style>
