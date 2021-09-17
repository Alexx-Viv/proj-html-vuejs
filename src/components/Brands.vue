<template>
  <div class="container mt-5 pt-3">
    <div class="row mb-3">
      <div class="col-12 text-center"><h2>Brands Logo</h2></div>
    </div>
    <div class="row d-flex justify-content-center mb-5">
      <div
        v-for="logo in logos"
        :key="logo.id"
        class="col-2 d-flex justify-content-center"
      >
        <img :src="logo.src" class="img-fluid" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brands',
  data() {
    return {
      logos: [
        { id: 40, src: require('../assets/img/main/brands/b_logotype_6.png') },
        { id: 41, src: require('../assets/img/main/brands/b_logotype_7.png') },
        { id: 42, src: require('../assets/img/main/brands/b_logotype_1.png') },
        { id: 43, src: require('../assets/img/main/brands/b_logotype_2.png') },
        { id: 44, src: require('../assets/img/main/brands/b_logotype_3.png') },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
  font-size: 1.2rem;
}
</style>
