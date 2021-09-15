<template>
  <Hero />
</template>

<script>
import Hero from './Hero.vue';
export default {
  name: 'Main',
  components: {
    Hero,
  },
};
</script>

<style scoped>
div {
  background-color: red;
  width: 100%;
  height: 500px;
}
</style>
