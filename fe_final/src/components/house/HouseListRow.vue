<template>
  <div class="house_list" @click="selectHouse">
    <div class="apt_img"></div>
    <div class="apt_info">
      <div class="apt_name">{{ house.아파트 }}</div>
      <div class="apt_detail">
        <div class="apt_year detail_box">
          <!-- 건축년도<br /> -->
          {{ house.건축년도 }}년
        </div>
        <div class="apt_floor detail_box">
          <!-- 층<br /> -->
          {{ house.층 }}층
        </div>
        <div class="apt_floor">
          <!-- 전용면적<br /> -->
          {{ house.전용면적 }}㎡
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseListRow",
  props: {
    house: Object,
  },
  methods: {
    ...mapActions(houseStore, ["detailHouse"]),
    selectHouse() {
      this.detailHouse(this.house);
    },
  },
};
</script>

<style scoped>
.house_list {
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px var(--shadow-color);
  margin: 0  10px 30px 200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  widows: 100%;
}

.house_list:hover {
  /* transform: scale(1.02);
  transition: transform 0.3s ease-in-out; */
  cursor: pointer;
}

.apt_img {
  background-image: url("./random/8.jpg");
  background-color: #cccccc;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 5px 0 0 5px;
}

.apt_name {
  padding: 10px 20px;
  font-size: 30px;
}

.apt_detail {
  display: grid;
  opacity: 0.6;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  font-size: 23px;
}
/* .detail_box {
  border-right: 1px solid darkgray;
  margin-bottom: 5px;
} */
</style>
