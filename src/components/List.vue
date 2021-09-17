<template>
  <div>
    <h2>{{ title }}</h2>
    <div
      v-for="product in itemsList"
      :key="product.id"
      class="d-flex justify-content-between"
    >
      <div>
        <h4>{{ product.name }}</h4>
        <i v-for="n in product.stars" :key="n" class="fas fa-star"></i>
        <h4 class="price" v-if="product.price === product.discounted">
          {{ product.price }}
        </h4>
        <h4 class="price" v-else>
          <span>{{ product.price }}</span> {{ product.discounted }}
        </h4>
      </div>
      <div>
        <img :src="product.src" width="100" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['title', 'itemsList'],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
h2 {
  font-weight: lighter;
  font-size: 1rem;
  margin-bottom: 20px;
  text-transform: uppercase;
}
h4 {
  font-size: 0.8rem;
  font-weight: lighter;
}
img {
  margin-top: -15px;
}
.fa-star {
  color: $secondary-color;
  margin-bottom: 10px;
}
span {
  text-decoration: line-through;
}
</style>
