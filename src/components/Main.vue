<template>
  <div>
    <Hero />
    <section id="featured-products">
      <TitleSection
        class="mt-5"
        headline="Featured Products"
        subheadline="Must have products from our top sellers"
      />
      <ProductGallery />
    </section>
    <Collection />
    <section id="best-seller">
      <TitleSection
        class="my-5"
        headline="Best Seller"
        subheadline="Must have products from our top sellers"
      />
      <div class="container d-flex justify-content-center">
        <Gallery :imagesList="imageListBestSellers" />
      </div>
    </section>
    <section id="offers" class="p-5 mt-5"><Offers /></section>
    <section id="new-arrivals">
      <TitleSection
        class="mt-5"
        headline="New Arrivals"
        subheadline="Brand new products from top designer"
      />
      <Gallery :imagesList="imageListNewArrivals" />
    </section>
    <section id="testimonials" class="mt-5">
      <Testimonials />
    </section>
    <section id="blog" class="mt-5">
      <TitleSection
        class="my-5"
        headline="From Our Blog"
        subheadline="The latest Classic Shop news"
      />
      <Blog />
    </section>
    <hr />
    <section>
      <div class="container d-flex justify-content-evenly">
        <List title="Featured" :itemsList="featured" />
        <List title="On Sale" :itemsList="onSale" />
        <List title="Top Rated" :itemsList="topRated" />
        <List title="Latest Reviews" :itemsList="reviews" />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import TitleSection from './TitleSection.vue';
import Collection from './Collection.vue';
import Gallery from './Gallery.vue';
import ProductGallery from './ProductGallery.vue';
import Offers from './Offers.vue';
import Testimonials from './Testimonials.vue';
import Blog from './Blog.vue';
import List from './List.vue';

export default {
  name: 'Main',
  components: {
    Hero,
    TitleSection,
    Collection,
    Gallery,
    ProductGallery,
    Offers,
    Testimonials,
    Blog,
    List,
  },
  data() {
    return {
      imageListBestSellers: [
        {
          id: 3,
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          title: 'spring printed dress',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 4,
          src: require('../assets/img/main/gallery/modern_love_tee.jpg'),
          title: 'modern love tee',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 5,
          src: require('../assets/img/main/gallery/black_leather_jacket.jpg'),
          title: 'black leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 6,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          title: 'elegant leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 7,
          src: require('../assets/img/main/gallery/hipster_black_top.jpg'),
          title: 'hipster black top',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
      ],
      imageListNewArrivals: [
        {
          id: 8,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          title: 'elegant leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 9,
          src: require('../assets/img/main/gallery/hipster_black_top.jpg'),
          title: 'hipster black top',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 10,
          src: require('../assets/img/main/gallery/black_leather_suit.jpg'),
          title: 'modern love tee',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 11,
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          title: 'spring printed dress',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
        {
          id: 12,
          src: require('../assets/img/main/gallery/modern_love_tee.jpg'),
          title: 'black leather jacket',
          categorys: ['category1', 'category2'],
          price: '66$',
        },
      ],
      featured: [
        {
          id: 35,
          src: require('../assets/img/main/gallery/black_leather_jacket.jpg'),
          name: 'black leather jacket',
          stars: 0,
          price: '125$',
          discounted: '125$',
        },
        {
          id: 36,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          name: 'elegant leather jacket',
          stars: 5,
          price: '235$',
          discounted: '200$',
        },
        {
          id: 37,
          src: require('../assets/img/main/gallery/hipster_black_top.jpg'),
          name: 'hipster black top',
          stars: 0,
          price: '57$',
          discounted: '57$',
        },
      ],
      onSale: [
        {
          id: 38,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          name: 'elegant leather jacket',
          stars: 5,
          price: '235$',
          discounted: '200$',
        },
        {
          id: 39,
          src: require('../assets/img/main/gallery/blue_leather_jacket.jpg'),
          name: 'blue leather jacket',
          stars: 0,
          price: '80$',
          discounted: '60$',
        },
        {
          id: 40,
          src: require('../assets/img/main/gallery/modern_leather_boots.jpg'),
          name: 'modern leather boots',
          stars: 0,
          price: '50$',
          discounted: '30$',
        },
      ],
      topRated: [
        {
          id: 41,
          src: require('../assets/img/main/gallery/leather_gloves.jpg'),
          name: 'leather gloves',
          stars: 5,
          price: '45$',
          discounted: '45$',
        },
        {
          id: 42,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          name: 'elegant leather jacket',
          stars: 5,
          price: '200$',
          discounted: '200$',
        },
        {
          id: 43,
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          name: 'spring printed dress',
          stars: 5,
          price: '47$',
          discounted: '47$',
        },
      ],
      reviews: [
        {
          id: 44,
          src: require('../assets/img/main/gallery/black_elegant_leather_jacket.jpg'),
          name: 'elegant leather jacket',
          stars: 5,
          price: 'by admin',
          discounted: 'by admin',
        },
        {
          id: 45,
          src: require('../assets/img/main/gallery/leather_gloves.jpg'),
          name: 'leather gloves',
          stars: 5,
          price: 'by beardman',
          discounted: 'by beardman',
        },
        {
          id: 46,
          src: require('../assets/img/main/gallery/spring_printed_dress.jpg'),
          name: 'spring printed dress',
          stars: 5,
          price: 'by admin',
          discounted: 'by admin',
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
#offers {
  background-image: url('../assets/img/main/offers/bkgd_confetti-compressor.jpg');
  background-size: cover;
}
#testimonials {
  background-image: url('../assets/img/main/review/testimonials_home_1_bg.jpg');
  background-position: cover;
}
</style>
