<template>
  <div id="top-nav" class="row justify-content-between">
    <!-- SOCIAL ICONS -->
    <div class="col-2 d-flex align-items-center">
      <a
        v-for="social in socialLinks"
        :key="social.id"
        class="icon"
        :href="social.link"
      >
        <i class="fab" :class="social.icon"></i>
      </a>
    </div>
    <!-- ACCOUNT & CART LINKS -->
    <div class="col-6 d-flex align-items-center">
      <div class="col-6 account-links">
        <a href="https://vuejs.org/">Shopping Card</a>
        <a href="#">My Account<i class="fas fa-chevron-down"></i> </a>
      </div>
      <div class="cart col-6 d-flex align-items-center justify-content-center">
        <a href="#"
          ><i class="fas fa-shopping-cart"></i>CART
          <i class="fas fa-chevron-down"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
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
#top-nav {
  max-width: 950px;
  height: 45px;
  margin: 0 auto;
}
.icon {
  margin: 0 10px;
}
.account-links a {
  font-size: 0.8rem;
  margin: 0 10px;
}
.cart {
  height: 100%;
  border-left: 1px solid #eeeeee;
  background-color: #e5e5e5;
  font-size: 0.8rem;
}
.fa-chevron-down {
  margin-left: 10px;
}
.fa-shopping-cart {
  margin-right: 10px;
}
</style>
