<template>
  <div
    class="container d-flex align-items-center justify-content-center flex-column mb-5"
  >
    <div class="row w-50 text-center">
      <div
        v-for="category in categorys"
        :key="category"
        :class="{ active: category.isActive }"
        class="col"
      >
        <strong>{{ category.name }}</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 d-flex">
        <div v-for="product in activeProducts" :key="product.id" class="card">
          <div class="position">
            <img :src="product.src" class="img-fluid" alt="" />
            <div
              class="product d-flex justify-content-center align-items-center"
            >
              <i class="far fa-check-square fa-2x"></i>
            </div>
          </div>
          <h2>{{ product.title }}</h2>
          <h3 v-for="category in product.categorys" :key="category.index">
            {{ category }}
          </h3>
          <h2 class="price" v-if="product.price === product.discounted">
            {{ product.price }}
          </h2>
          <h2 class="price" v-else>
            <span>{{ product.price }}</span> {{ product.discounted }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
  data() {
    return {
      categorys: [
        {
          id: 27,
          name: 'Men',
          isActive: true,
          products: [
            {
              id: 23,
              src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
              title: 'elegant leather jacket',
              categorys: ['category1', 'category2'],
              price: '295$',
              discounted: '200$',
            },
            {
              id: 24,
              src: require('../assets/img/main/gallery/black_leather_suit.jpg'),
              title: 'black leather suit',
              categorys: ['category1', 'category2'],
              price: '175$',
              discounted: '175$',
            },
            {
              id: 25,
              src: require('../assets/img/main/gallery/blue_jacket_and_white_stripe_tee.jpg'),
              title: 'blue jacket & stripe tee',
              categorys: ['category1', 'category2'],
              price: '580$',
              discounted: '580$',
            },
            {
              id: 26,
              src: require('../assets/img/main/gallery/modern_black_leather_suit.jpg'),
              title: 'black leather jacket',
              categorys: ['category1', 'category2'],
              price: '96$',
              discounted: '96$',
            },
          ],
        },
        {
          id: 28,
          name: 'Women',
          isActive: false,
        },
        {
          id: 29,
          name: 'Accessories',
          isActive: false,
        },
      ],
      activeProducts: [],
    };
  },
  created() {
    for (let i = 0; i < this.categorys.length; i++) {
      if (this.categorys[i].isActive) {
        this.activeProducts = this.categorys[i].products;
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
.col {
  background: #f6f6f6;
  padding: 20px 0;
  border: 1px solid #ebebeb;
}
.active {
  background-color: white;
}
.card {
  border: none;
}
.position {
  position: relative;
}
.product {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(66, 126, 209, 0.85) 0%,
    rgba(226, 128, 177, 0.85) 100%
  );
  opacity: 0;
}
.product:hover {
  cursor: pointer;
  opacity: 1;
}
h2 {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: bolder;
}
h3 {
  font-size: 0.8rem;
}
span {
  text-decoration: line-through;
}
i {
  color: white;
  background-color: #2a2f33;
  padding: 30px 30px;
  border-radius: 50%;
}
.price {
  color: $secondary-color;
}
.col:hover {
  background: white;
  cursor: pointer;
}
</style>
