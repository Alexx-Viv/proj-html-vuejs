<template>
  <footer>
    <Newsletter />
    <div class="container p-5">
      <div class="row jusitfy-content-evenly mb-5">
        <div class="col-3"><Info /></div>
        <div class="col-3">
          <List title="Top Rated Products" :itemsList="topRated" />
        </div>
        <div class="col-3"><PostList :posts="recentPosts" /></div>
        <div class="col-3"><TagList :tags="tags" /></div>
      </div>
    </div>
    <Credits />
  </footer>
</template>

<script>
import Newsletter from './Newsletter.vue';
import Info from './Info.vue';
import List from './List.vue';
import PostList from './PostList.vue';
import TagList from './TagList.vue';
import Credits from './Credits.vue';

export default {
  name: 'Footer',
  components: {
    Newsletter,
    Info,
    List,
    PostList,
    TagList,
    Credits,
  },
  data() {
    return {
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
          price: '235$',
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
      recentPosts: [
        { id: 50, title: 'Aenean lobortis sapien enim viverra', link: '#' },
        { id: 51, title: 'Duis ac massa semper maximus', link: '#' },
        { id: 52, title: 'Nunc fermint nulla eu justo sem id', link: '#' },
        { id: 53, title: 'Aliquam posuere magna eget nibh', link: '#' },
        { id: 54, title: 'Cras ac nulla ac consecte rutrum', link: '#' },
        { id: 55, title: 'Fusce mattis nunc ut aliquam', link: '#' },
      ],
      tags: [
        { id: 60, name: 'Black' },
        { id: 61, name: 'boots' },
        { id: 62, name: 'Brown' },
        { id: 63, name: 'Casual' },
        { id: 64, name: 'D&G' },
        { id: 65, name: 'Fabric' },
        { id: 66, name: 'flowers' },
        { id: 67, name: 'Grey' },
        { id: 68, name: 'hat' },
        { id: 69, name: 'Hipster' },
        { id: 70, name: 'lines' },
        { id: 71, name: 'multi-purpose' },
        { id: 72, name: 'New York' },
        { id: 73, name: 'Outdoors' },
        { id: 74, name: 'red' },
        { id: 75, name: 'Responsive' },
        { id: 76, name: 'summer' },
        { id: 77, name: 'sweater' },
        { id: 78, name: 'Travel' },
        { id: 79, name: 'Warm' },
        { id: 80, name: 'White' },
        { id: 81, name: 'Winter' },
      ],
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #2a2f33;
  color: white;
}
</style>
