<template>
  <div>
    <Hero />
    <section id="featured-products">
      <TitleSection
        class="mt-5"
        headline="Featured Products"
        subheadline="Must have products from oue top sellers"
      />
    </section>
    <Collection />
    <section id="best-seller">
      <TitleSection
        class="mt-5"
        headline="Best Seller"
        subheadline="Must have products from oue top sellers"
      />
    </section>
    <section id="new-arrivals">
      <TitleSection
        class="mt-5"
        headline="New Arrivals"
        subheadline="Brand new products from top designer"
      />
    </section>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import TitleSection from './TitleSection.vue';
import Collection from './Collection.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    TitleSection,
    Collection,
  },
};
</script>

<style></style>
