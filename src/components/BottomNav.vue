<template>
  <div id="bottom-nav" class="row">
    <!-- LOGO -->
    <div class="col-3 d-flex justify-content-center align-items-center">
      <a href="#"
        ><img
          src="../assets/img/header/bottom-nav/avada-classic-shop-logo.svg"
          height="50"
          alt=""
      /></a>
    </div>
    <!-- NAV LINKS -->
    <div class="col-9 d-flex align-items-center justify-content-end h-100">
      <span
        class="link h-100 d-flex align-items-center"
        v-for="link in navLinks"
        :key="link.id"
        :class="{ active: link.isActive }"
        >{{ link.name }}<i v-if="link.isChevron" class="fas fa-chevron-down"></i
      ></span>
      <span class="shop-button">Shop now!</span>
      <span><i class="fas fa-search"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      navLinks: [
        { id: 17, name: 'Home', isChevron: true, isActive: true },
        { id: 18, name: 'Shop', isChevron: true, isActive: false },
        { id: 19, name: 'Products', isChevron: true, isActive: false },
        { id: 20, name: 'Categories', isChevron: true, isActive: false },
        { id: 21, name: 'News', isChevron: false, isActive: false },
        { id: 22, name: 'Elements', isChevron: true, isActive: false },
      ],
    };
  },
};
</script>

<style scoped>
#bottom-nav {
  height: 105px;
  max-width: 950px;
  margin: 0 auto;
}
.link {
  font-size: 0.8rem;
  margin: 0 10px;
}
.active {
  color: #79a2da;
  border-top: 2px solid #427ed1;
}
.fa-chevron-down {
  margin-left: 5px;
}
.shop-button {
  color: white;
  background-color: #427ed1;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 15px;
  border-radius: 50px;
  margin: 0 10px;
}
.fa-search {
  margin: 0 10px;
}
span:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
