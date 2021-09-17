<template>
  <div class="row p-0 m-0 flex-row">
    <div class="icon d-flex align-items-center justify-content-end">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div v-for="image in imagesList" :key="image.id" class="col">
      <img :src="image.src" alt="" />
      <div class="cards">
        <div
          class="row h-75 p-0 m-0 d-flex flex-column justify-content-center text-center"
        >
          <h2>{{ image.title }}</h2>
          <div class="col-12 d-flex justify-content-center">
            <h3 v-for="category in image.categorys" :key="category">
              {{ category }}<span>,</span>
            </h3>
          </div>
          <h2>{{ image.price }}</h2>
        </div>
        <div class="row h-25 p-0 m-0 align-items-top">
          <div class="col-6">
            <h3>
              <a href=""><i class="fas fa-shopping-cart"></i> Add to card</a>
            </h3>
          </div>
          <div class="col-6 text-end">
            <h3>
              <a href=""><i class="fas fa-list-ul"></i> Details</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="icon d-flex align-items-center">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['imagesList'],
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
.col {
  height: 200px;
  position: relative;
  height: fit-content;
}
img {
  width: 100%;
  height: auto;
}
.cards {
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
.cards:hover {
  opacity: 1;
}

h2 {
  color: white;
  font-size: 1.2rem;
}
h3 {
  color: white;
  font-size: 0.6rem;
}
a {
  color: white;
  font-size: 0.7rem;
}
a:hover {
  color: $secondary-color;
}

.fa-chevron-right,
.fa-chevron-left {
  background-color: gray;
  padding: 10px 10px;
}

.fa-chevron-right:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.fa-chevron-left:hover {
  cursor: pointer;
  transform: scale(1.2);
}
div.icon {
  max-width: fit-content;
}
</style>
