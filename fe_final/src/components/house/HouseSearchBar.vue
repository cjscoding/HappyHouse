<template>
<div class="houseSearch">
    <div class="searchBar">
        <b-form-select class="box" v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
        <b-form-select class="box" v-model="gugunCode" :options="guguns" @change="dongList"></b-form-select>
        <b-form-select class="box" v-model="dongCode" :options="dongs" @change="searchApt"></b-form-select>
    </div>
    <div class="search" v-show="isOn">
        <div class="min">
            최소 {{from}}억<br />
            <input type="range" step="0.1" id="fromPrice" v-model="from" required min="0" max="30" @change="putFrom" />
        </div>
        <div class="max">
            최대 {{to}}억<br />
            <input type="range" step="0.1" id="toPrice" v-model="to" required min="0" max="30" @change="putTo" />
        </div>
        <button class="rangeBtn" type="button" @click="searchByPrice">설정</button>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from "vuex";
const houseStore = "houseStore";

export default {

    name: "HouseSearchBar",
    data() {
        return {
            sidoCode: null,
            gugunCode: null,
            dongCode: null,
            sidoGugunDong: null,
            from: 0,
            to: 0,
            isOn: false,
        };
    },
    computed: {
        ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
    },
    created() {
        this.CLEAR_SIDO_LIST();
        this.getSido();
    },
    methods: {
        ...mapActions(houseStore, [
            "getSido",
            "getGugun",
            "getHouseList",
            "getDong",
        ]),
        ...mapMutations(houseStore, [
            "CLEAR_SIDO_LIST",
            "CLEAR_GUGUN_LIST",
            "CLEAR_DONG_LIST",
            "SET_HOUSE_LIST",
        ]),
        gugunList() {
            this.CLEAR_GUGUN_LIST();
            this.gugunCode = null;
            if (this.sidoCode) this.getGugun(this.sidoCode);
        },
        dongList() {
            this.dongCode = null;
            this.CLEAR_DONG_LIST();
            if (this.gugunCode) this.getDong(this.gugunCode);
        },
        searchApt() {
            let sidoGugunDong = "";
            let tmpSidos = this.sidos;
            let tmpGuguns = this.guguns;
            let tmpDongs = this.dongs;

            for (let i = 0; i < tmpSidos.length; i++) {
                if (tmpSidos[i].value === this.sidoCode)
                    sidoGugunDong += tmpSidos[i].text + " ";
            }
            for (let i = 0; i < tmpGuguns.length; i++) {
                if (tmpGuguns[i].value === this.gugunCode)
                    sidoGugunDong += tmpGuguns[i].text + " ";
            }
            for (let i = 0; i < tmpDongs.length; i++) {
                if (tmpDongs[i].value === this.dongCode)
                    sidoGugunDong += tmpDongs[i].text;
            }
            console.log("addr :" + sidoGugunDong);
            this.sidoGugunDong = sidoGugunDong;
            if (this.gugunCode)
                this.getHouseList({
                    gugunCode: this.gugunCode,
                    dongCode: this.dongCode,
                    sidoGugunDong: sidoGugunDong,
                });
            this.isOn = true;
        },
        searchByPrice() {
            let tmpHouses = this.houses;
            let newHouses = [];
            for (let i = 0; i < tmpHouses.length; i++) {
                let price = Number(tmpHouses[i].거래금액
                    .replaceAll(",", "")
                    .replaceAll(" ", ""));
                price /= 10000;
                if (price >= this.from && price <= this.to) {
                    newHouses.push(tmpHouses[i]);
                }
            }
            this.SET_HOUSE_LIST({
                houses: newHouses,
                sidoGugunDong: this.sidoGugunDong
            });
        },
        putFrom() {
            if (Number(this.to) < Number(this.from)) {
                this.to = this.from;
            }
        },
        putTo() {
            if (Number(this.to) < Number(this.from)) {
                this.from = this.to;
            }
        },
    },
};
</script>

<style scoped>
.searchBar {
    display: flex;
    padding: 0 200px;
    margin-bottom: 25px;
}

.box {
    width: 150px;
    margin-right: 20px;
    display: flex;
}

.search {
    padding: 0 70px 0 200px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
    align-items: center;
    width: 50%;
}

.rangeBtn {
    width: 50px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    margin-left: 10px;
}

.rangeBtn:hover {
    color: white;
    background-color: var(--mild-color);
    border: 1px solid var(--mild-color);
}

.min>input,
.max>input {
    width: 90%;
}
</style>
