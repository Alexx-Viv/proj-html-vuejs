<template>
  <div>
    <h2>Tags</h2>
    <span v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: ['tags'],
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1rem;
}
span {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid rgba(250, 250, 250, 0.6);
  margin: 5px;
}
</style>
