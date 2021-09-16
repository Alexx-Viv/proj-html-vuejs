<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center mb-3">
        <img :src="testimonials[0].src" alt="" />
      </div>
      <div class="col-6 text-center mb-3">
        {{ testimonials[0].review }}
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="col-4 text-end">
          <h4 class="name">{{ testimonials[0].name }}</h4>
        </div>
        <div class="col-4">
          <h4 class="detail">{{ testimonials[0].detail }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          id: 33,
          src: require('../assets/img/main/review/woman_testimonial.png'),
          review:
            'Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.',
          name: 'Lisa Smith',
          detail: 'Theme Fusion',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  color: white;
  padding: 100px 0;
}
.name {
  font-weight: bolder;
}
.detail {
  font-weight: lighter;
  padding-left: 10px;
}
</style>
