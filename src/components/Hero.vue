<template>
  <section id="hero">
    <div
      class="container d-flex align-items-center justify-content-center h-100"
    >
      <div class="row w-100">
        <div class="col-12 text-center">
          <h2>Brand New Arrivals</h2>
        </div>
        <div class="col-12 text-center">
          <h3>New Collection From New York</h3>
        </div>
        <div class="col-6 text-end mt-4"><span>View All</span></div>
        <div class="col-6 mt-4"><span>LookBook</span></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
#hero {
  background-image: url('../assets/img/main/hero/home1_slide_three_bg_2.jpg');
  background-size: cover;
  width: 100%;
  height: 500px;
}
h2 {
  color: white;
  font-size: 4rem;
  font-weight: bolder;
}
h3 {
  color: white;
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.2rem;
}
span {
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bolder;
}
span:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}
</style>
