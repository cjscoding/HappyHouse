<template>
<div class="boardContainer">
    <h1 class="boardTitle"><i class="far fa-edit"></i>게시판</h1>
    <router-link :to="{ name: 'BoardWrite' }" class="goWrite">글작성</router-link>
    <div class="boardTable" v-if="articles.length">
        <table>
            <thead class="headTable">
                <tr class="headTr">
                    <th>글번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody class="tbody" id="my-table" :per-page="perPage" :current-page="currentPage">
                <board-list-row v-for="(article, index) in itemsForList" :key="index" v-bind="article" class="boardItem" />
            </tbody>
        </table>
        <b-pagination class="page" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
    </div>
    <div class="boardTable" v-else>작성된 글이 없습니다.</div>
</div>
</template>

<script>
import BoardListRow from "@/components/board/child/BoardListRow";
import {
    listArticle
} from "@/api/board.js";

export default {
    name: "BoardList",
    components: {
        BoardListRow,
    },
    data() {
        return {
            articles: [],
            currentPage: 1,
            perPage: 5,
        };
    },
    computed: {
        rows() {
            return this.articles.length;
        },
        itemsForList() {
            return this.articles.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage,
            );
        }
    },
    created() {
        let param = {
            pg: 1,
            spp: 20,
            key: null,
            word: null,
        };
        listArticle(
            param,
            (response) => {
                this.articles = response.data;
            },
            (error) => {
                console.log(error);
            }
        );
    },
};
</script>

<style scoped>
.boardContainer {
    padding: 50px 200px;
}

.boardTitle {
    font-size: 70px;
    color: var(--mild-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-edit {
    font-size: 45px;
    padding-right: 20px;
}

.goWrite {
    text-decoration: none;
    float: right;
    font-size: 25px;
    margin-bottom: 20px;
    border: 1px solid var(--mild-color);
    color: var(--mild-color);
    padding: 0px 10px;
    border-radius: 5px;
}

.goWrite:hover {
    background-color: var(--mild-color);
    color: white;
}

table {
    width: 100%;
    font-size: 25px;
    text-align: center;
    border-collapse: collapse;
}

.headTable {
    height: 70px;
    font-size: 28px;
    color: white;
    background-color: var(--mild-color);
}

th,
td {
    border-bottom: 1px solid #ddd;
}

.page {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
</style>
