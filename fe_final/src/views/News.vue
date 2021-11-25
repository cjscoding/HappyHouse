<template>
  <div class="news">
    <div class="news_img">
      <p class="main_text">Happy News</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    if (window.scrollY) {
      window.scroll(0, 0);
    }
  },
  components: {},
};
</script>

<style scoped>
.news {
  padding-top: 90px;
}

.news_img {
  background-image: url("../assets/news.jpg");
  background-color: #cccccc;
  height: 300px;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main_text{
  position: absolute;
  color: white;
    font-size: 140px;
    right: 100px;
    top: 150px;
    text-shadow: 1px 1px 3px rgb(184, 127, 87);
}
</style>
