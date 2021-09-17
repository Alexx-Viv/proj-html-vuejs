<template>
  <section id="newsletter">
    <div class="container p-5">
      <div class="row">
        <div class="col-12 d-flex justify-content-center aling-items-center">
          <i class="far fa-envelope fa-2x"></i>
          <h2>Subscribe now and get special offers</h2>
          <input v-model="email" placeholder="insert your email" type="text" />
          <span>Send</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
i {
  color: white;
  padding-top: 5px;
}
h2 {
  color: white;
  margin: 0 60px 0 20px;
}
input {
  width: 300px;
  padding-left: 10px;
  background: white;
  border-radius: 30px;
  border: 1px solid white;
}
span {
  background-color: $secondary-color;
  color: black;
  text-transform: uppercase;
  font-weight: bolder;
  padding: 7px 20px 0px 20px;
  border-radius: 30px;
  margin: 0 20px;
}
</style>
