<template>
  <nav>
    <div class="container">
      <TopNav />
      <BottomNav />
    </div>
  </nav>
</template>

<script>
import TopNav from './TopNav.vue';
import BottomNav from './BottomNav.vue';

export default {
  name: 'Header',
  components: {
    TopNav,
    BottomNav,
  },
};
</script>

<style></style>
