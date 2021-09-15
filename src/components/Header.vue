<template>
  <nav>
    <div class="container">
      <TopNav />
      <div id="bottom-nav" class="row"></div>
    </div>
  </nav>
</template>

<script>
import TopNav from './TopNav.vue';

export default {
  name: 'Header',
  components: {
    TopNav,
  },
};
</script>

<style scoped>
#bottom-nav {
  height: 105px;
  background-color: goldenrod;
}
</style>
