<template>
  <section id="credits">
    <div class="container p-5">
      <div class="row">
        <div class="col-12 text-center">
          <span
            >© Copyright 2012 - 2021 | Avada Theme by
            <a href="#">Theme Fusion</a> | All Rights Reserved | Powered by
            <a href="#">WordPress</a></span
          >
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <img
            src="../assets/img/footer/credits/payment_cards_footer.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Credits',
};
</script>

<style scoped>
#credits {
  background-color: #1d1f22;
  width: 100%;
}
span {
  font-size: 0.8rem;
}
a {
  color: white;
}
a:hover {
  color: lightskyblue;
}
</style>
