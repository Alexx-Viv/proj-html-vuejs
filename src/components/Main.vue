<template>
  <div>
    <Hero />
    <section id="featured-products">
      <TitleSection
        class="mt-5"
        headline="Featured Products"
        subheadline="Must have products from our top sellers"
      />
    </section>
    <Collection />
    <section id="best-seller">
      <TitleSection
        class="mt-5"
        headline="Best Seller"
        subheadline="Must have products from our top sellers"
      />
      <div class="container d-flex justify-content-center">
        <Gallery :imagesList="imageListBestSellers" />
      </div>
    </section>
    <section id="new-arrivals">
      <TitleSection
        class="mt-5"
        headline="New Arrivals"
        subheadline="Brand new products from top designer"
      />
      <Gallery :imagesList="imageListNewArrivals" />
    </section>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import TitleSection from './TitleSection.vue';
import Collection from './Collection.vue';
import Gallery from './Gallery.vue';

export default {
  name: 'Main',
  components: {
    Hero,
    TitleSection,
    Collection,
    Gallery,
  },
  data() {
    return {
      imageListBestSellers: [
        {
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          title: 'spring printed dress',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/modern_love_tee.jpg'),
          title: 'modern love tee',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/black_leather_jacket.jpg'),
          title: 'black leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          title: 'elegant leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/hipster_black_top.jpg'),
          title: 'hipster black top',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
      ],
      imageListNewArrivals: [
        {
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          title: 'elegant leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/hipster_black_top.jpg'),
          title: 'hipster black top',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/black_leather_suit.jpg'),
          title: 'modern love tee',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          title: 'spring printed dress',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          src: require('../assets/img/main/gallery/modern_love_tee.jpg'),
          title: 'black leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
      ],
    };
  },
};
</script>

<style scoped>
#best-seller .container {
  width: 900px;
}
#new-arrivals {
  width: 100vw;
}
</style>
