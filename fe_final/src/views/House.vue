<template>
  <div class="house">
    <div class="house_img">
      <p class="main_text">Happy House</p>
    </div>
    <h3 class="house_title">원하시는 지역을 선택해주세요! <i class="fas fa-laptop-house"></i></h3>
    <house-search-bar></house-search-bar>
    <kakao-map />
    <house-list />
  </div>
</template>

<script>
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import KakaoMap from "@/components/map/KakaoMap.vue";
export default {
  name: "House",
  components: {
    HouseSearchBar,
    HouseList,
    KakaoMap,
  },
  created() {
    if (window.scrollY) {
      window.scroll(0, 0);
    }
  },
};
</script>

<style scoped>
.house {
  padding-top: 90px;
}

.house_img {
  background-image: url("../assets/aptImg/random/8.jpg");
  background-color: #cccccc;
  height: 300px;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.house_title {
  margin: 50px 0;
  padding: 0 200px;
  font-size: 45px;
  display: flex;
  align-items: center;
}
.fa-laptop-house{
  font-size: 30px;
  margin-left: 10px;
  padding-bottom: 5px;
}

.main_text {
    position: absolute;
    color: white;
    font-size: 140px;
    right: 120px;
    top: 55px;
    text-shadow: 1px 1px 3px rgb(104, 70, 8);
}
</style>
