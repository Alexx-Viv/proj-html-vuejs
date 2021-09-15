<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2>{{ headline }}</h2>
      </div>
      <div class="col-12 text-center">
        <h3>{{ subheadline }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleSection',
  props: ['headline', 'subheadline'],
};
</script>

<style scoped>
h2 {
  position: relative;
  font-size: 2rem;
  font-weight: bolder;
  z-index: 1;
  overflow: hidden;
  text-align: center;
}
h2:before,
h2:after {
  position: absolute;
  top: 51%;
  overflow: hidden;
  width: 20%;
  height: 1px;
  content: '\a0';
  background-color: lightgray;
  margin: 0 20px;
}
h2:before {
  margin-left: calc(-20% - 20px);
}
h3 {
  font-size: 1rem;
  color: gray;
}
</style>
