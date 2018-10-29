<template>
  <div class="blog">
    <section class="blog__content">
      <div class="blog__title">Artical List</div>
      <div class="blog__card">Card</div>
      <div class="blog__split">
        ........<span class="blog__split--arrow">∨</span>........
      </div>
    </section>
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
