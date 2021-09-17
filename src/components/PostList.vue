<template>
  <section>
    <h2>Recent Post</h2>
    <div v-for="post in posts" :key="post.id">
      <a :href="post.link"
        ><i class="fas fa-chevron-right">
          <span> {{ post.title }}</span></i
        ></a
      >
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
i {
  color: white;
}
span {
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: lighter;
}
h2 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: lighter;
}
i:hover {
  color: $secondary-color;
}
</style>
