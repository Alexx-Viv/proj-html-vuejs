<template>
  <div class="row m-0">
    <div
      v-for="collection in collections"
      :key="collection.id"
      class="col-4 p-0"
    >
      <img :src="collection.src" alt="" />
      <div
        class="details h-100 d-flex flex-column align-items-center justify-content-end pb-5"
      >
        <h2>{{ collection.headline }}</h2>
        <h3>{{ collection.subheadline }}</h3>
        <a :href="collection.link">view more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collection',
  data() {
    return {
      collections: [
        {
          headline: 'Winter Collection',
          subheadline: 'stylish and warm',
          link: '#',
          src: require('../assets/img/main/collections/winter_collection_bg.jpg'),
        },
        {
          headline: 'Spring Collection',
          subheadline: 'bright and colorful',
          link: '#',
          src: require('../assets/img/main/collections/spring_collection_bg.jpg'),
        },
        {
          headline: 'Autumn Collection',
          subheadline: 'rich and confortable',
          link: '#',
          src: require('../assets/img/main/collections/autumn_collection_bg.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-4 {
  position: relative;
  height: 450px;
}
img {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
h2 {
  color: white;
  font-weight: bolder;
}
h3 {
  color: white;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: lighter;
}
a {
  color: white;
  text-transform: uppercase;
  font-size: 0.6rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: bolder;
}
a:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}
</style>
