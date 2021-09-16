<template>
  <div class="container">
    <div class="row">
      <div v-for="article in articles" :key="article.id" class="col-4">
        <img :src="article.src" class="img-fluid" alt="" />
        <h2>{{ article.title }}</h2>
        <span>{{ article.date }} | {{ article.comments }} Comments</span>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data() {
    return {
      articles: [
        {
          id: 34,
          src: require('../assets/img/main/blog/post_img_12-700x441.jpg'),
          title: 'Aenean lobortis sapien enim viverra',
          date: 'September 9th, 2015',
          comments: 0,
          description:
            'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
        },
        {
          id: 35,
          src: require('../assets/img/main/blog/post_img_11-700x441.jpg'),
          title: 'Duis ac massa semper maximus',
          date: 'September 9th, 2015',
          comments: 0,
          description:
            'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
        },
        {
          id: 36,
          src: require('../assets/img/main/blog/post_img_10-700x441.jpg'),
          title: 'Nunc fermint nulla eu justo sem id',
          date: 'September 9th, 2015',
          comments: 0,
          description:
            'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 10px;
}
span {
  font-size: 0.8rem;
}
p {
  font-size: 1rem;
  margin-top: 20px;
}
</style>
