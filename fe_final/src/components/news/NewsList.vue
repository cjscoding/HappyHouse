<template>
<div class="news_list">
    <h2 class="news_title">원하시는 지역의 뉴스를 검색해보세요! <img class="news_logo" src="@/assets/newspaper.svg" alt="news_logo"> </h2>
    <news-location></news-location>
    <div class="newsItems">
        <news-list-row  id="my-table" :per-page="perPage" :current-page="currentPage" class="newsItem" v-for="(data, index) in itemsForList" :key="index" :news="data">
        </news-list-row>
    </div>
    <b-pagination class="page" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
    </b-pagination>
</div>
</template>

<script>
import NewsListRow from "@/components/news/child/NewsListRow.vue";
import NewsLocation from "@/components/news/child/NewsLocation.vue";
import {
    mapState
} from "vuex";
export default {
    data() {
        return {
            currentPage: 1,
            perPage: 4,
        }
    },
    computed: {
        ...mapState(["news"]),
        rows() {
            return this.news.length;
        },
        itemsForList() {
            return this.news.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage,
            );
        }
    },
    components: {
        NewsListRow,
        NewsLocation,
    },
};
</script>

<style scoped>
.news_logo{
    width: 50px;
    height: 50px;
    padding-left: 10px;
}
.news_list {
    padding: 0 200px;
    padding-bottom: 50px;
}

.news_title {
    margin-top: 50px;
    font-size: 45px;
}

.newsItem {
    margin: 30px 0;
}

.page{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
