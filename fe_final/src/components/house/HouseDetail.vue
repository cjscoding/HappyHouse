<template>
<div v-if="house" class="houseDetail">
    <h2>{{ house.아파트 }}</h2>
    <div class="img"></div>
    <div class="info">
        <div class="infoRow no">
            <p>일련번호</p>
            <p>{{ house.일련번호 }}</p>
        </div>
        <div class="infoRow name">
            <p>아파트 이름</p>
            <p>{{ house.아파트 }}</p>
        </div>
        <div class="infoRow dong">
            <p>법정동</p>
            <p>{{ house.법정동 }}</p>
        </div>
        <div class="infoRow floor">
            <p>층수</p>
            <p>{{ house.층 }}층</p>
        </div>
        <div class="infoRow won">
            <p>거래금액</p>
            <p>{{
            (parseInt(house.거래금액.replace(",", "")) * 10000) | price
          }}원</p>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex";

const houseStore = "houseStore";

export default {
    name: "HouseDetail",
    computed: {
        ...mapState(houseStore, ["house"]),
        // house() {
        //   return this.$store.state.house;
        // },
    },
    filters: {
        price(value) {
            if (!value) return value;
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
};
</script>

<style scoped>
.houseDetail {
    margin-left: 20px;
    padding-right: 200px;
    display: grid;
    grid-template-rows: 1fr 3fr 4fr;
    margin-bottom: 200px;
}

h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}

.img {
    background-image: url("./random/3.jpg");
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 5px;
}

.info {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    font-size: 23px;
    margin-top: 20px;
}
.infoRow{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.infoRow>p:first-child{
    text-align: right;
    padding-right: 10px;
    border-right: 1px solid var(--border-color);
}
.infoRow>p:last-child{
    padding-left: 10px;
}
</style>
