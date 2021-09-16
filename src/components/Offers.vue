<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="promo in promo" :key="promo.id" class="col-4">
        <img :src="promo.src" class="img-fluid" alt="" />
        <div class="content pt-5">
          <h2>{{ promo.title }}</h2>
          <p>{{ promo.description }}</p>
          <span>View More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offers',
  data() {
    return {
      promo: [
        {
          id: 1,
          title: '70% Off',
          description:
            'Vivamus tempor leo lacus, feugiatut magna aliquam erat.',
          src: require('../assets/img/main/offers/promo_box_1_bg.jpg'),
        },
        {
          id: 2,
          title: 'Free Shipping',
          description:
            'Vivamus tempor leo lacus, feugiatut magna aliquam erat.',
          src: require('../assets/img/main/offers/promo_box_2_bg.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-4 {
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  color: white;
}
span {
  color: white;
  text-transform: uppercase;
  font-size: 0.6rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: bolder;
}
span:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}
</style>
