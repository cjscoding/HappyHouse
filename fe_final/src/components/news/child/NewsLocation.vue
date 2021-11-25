<template>
<div class="location">
    <b-form-select required @change="selectedArea" v-model="area" class="loc_box">
        <option value="" disabled selected hidden>권역</option>
        <option v-for="(value, name, index) in locations" :key="index">
            {{ name }}
        </option>
    </b-form-select>
    <b-form-select required @change="selectedSido" v-model="sido" class="loc_box">
        <option value="" disabled selected hidden>시도</option>
        <option v-for="(value, name, index) in sidos" :key="index">
            {{ name }}
        </option>
    </b-form-select>
    <b-form-select required @change="selectedGugun" v-model="gugun" class="loc_box">
        <option value="" disabled selected hidden>시군구</option>
        <option v-for="(value, name, index) in guguns" :key="index">
            {{ value }}
        </option>
    </b-form-select>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
export default {
    data() {
        return {
            area: "",
            sido: "",
            gugun: "",
            sidos: {},
            guguns: {},
            keyword: "",
        };
    },
    computed: {
        ...mapState(["locations"]),
    },
    methods: {
        ...mapActions(["GET_NEWS_LIST"]),
        selectedArea() {
            let data = JSON.parse(JSON.stringify(this.locations[this.area]));
            this.sidos = data;
        },
        selectedSido() {
            this.guguns = this.sidos[this.sido];
        },
        selectedGugun() {
            this.keyword = `${this.sido} ${this.gugun}`;
            this.searchNews();
        },
        searchNews() {
            if (this.keyword) this.GET_NEWS_LIST(this.keyword);
        },
    },
};
</script>

<style scoped>
.location {
    margin: 50px 0;
    display: flex;
}

.loc_box {
    width: 200px;
    margin-right: 20px;
}
</style>
