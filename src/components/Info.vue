<template>
  <div class="info">
    <img
      src="../assets/img/logo/classic_shop_logo_footer.png"
      width="200"
      alt=""
    />
    <p class="m-1 mt-5">12345 North Main Street,</p>
    <p class="m-1">New York, NY 555555</p>
    <p class="m-1">Phone: 1.800.555.6789</p>
    <p class="m-1">Email: info@company.com</p>
    <p class="m-1">Web: Theme-fusion.com</p>
    <div class="mt-5">
      <a
        v-for="social in socialLinks"
        :key="social.id"
        class="icon"
        :href="social.link"
      >
        <i class="fab" :class="social.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      socialLinks: [
        { id: 13, icon: 'fa-facebook-f', link: 'https://vuejs.org/' },
        { id: 14, icon: 'fa-twitter', link: 'https://vuejs.org/' },
        { id: 15, icon: 'fa-instagram', link: 'https://vuejs.org/' },
        { id: 16, icon: 'fa-youtube', link: 'https://vuejs.org/' },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
p {
  color: white;
  font-weight: bolder;
}
a {
  color: white;
  margin: 0 5px;
}
.info {
  display: flex;
  flex-direction: column;
}
</style>
