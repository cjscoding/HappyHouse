<template>
<div class="houseInfo">
  <div class="houseList" v-if="houses && houses.length != 0">
    <house-list-row
      v-for="(house, index) in houses"
      :key="index"
      :house="house"
    />
  </div>
  <div class="no_house" v-else>
    <p>주택 목록이 없습니다.</p>
  </div>

  <house-detail></house-detail>
</div>
</template>

<script>
import HouseListRow from "@/components/house/HouseListRow.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseList",
  components: {
    HouseListRow,
    HouseDetail,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
};
</script>

<style scoped>
  .houseInfo{
    display: grid;
    grid-template-columns: 5fr 4fr;
  }
.houseList{
  height: 70vh;
  overflow-y: scroll;
  padding: 20px 0;
  margin-bottom: 50px;
}
.no_house {
  padding-bottom: 50px;
  padding-left: 200px;
  font-size: 30px;
}
</style>
