<template>
<div class="boardView">
    <h1 class="boardTitle"><i class="far fa-edit"></i>글 상세정보</h1>
    <div class="header">
        <h2 class="left">{{ article.subject }}</h2>
        <div class="right">
            <h5 class="no">글번호 [{{ article.articleno }}]</h5>
            <h5 class="hit">조회수 [{{ article.hit }}]</h5>
        </div>
    </div>
    <div class="info">
        <h5 class="userid">작성자 : {{ article.userid }}</h5>
        <h5 class="date">게시일 : {{ article.regtime }}</h5>
    </div>
    <div v-html="message" class="content"></div>
    <div class="btnBox">
        <button class="btn listBtn" @click="listArticle">목록</button>
        <button class="btn modifyBtn" @click="moveModifyArticle">글수정</button>
        <button class="btn deleteBtn" @click="removeArticle">글삭제</button>
    </div>
</div>
</template>

<script>
import {
    getArticle,
    deleteArticle
} from "@/api/board";

export default {
    data() {
        return {
            article: {},
        };
    },
    computed: {
        message() {
            if (this.article.content)
                return this.article.content.split("\n").join("<br>");
            return "";
        },
    },
    created() {
        getArticle(
            this.$route.params.articleno,
            (response) => {
                this.article = response.data;
            },
            (error) => {
                console.log("삭제시 에러발생!!", error);
            }
        );
    },
    methods: {
        listArticle() {
            this.$router.push({
                name: "BoardList",
            });
        },
        moveModifyArticle() {
            this.$router.push({
                name: "BoardUpdate",
                params: {
                    articleno: this.article.articleno,
                },
            });
        },
        removeArticle() {
            if (confirm("삭제하시겠습니까?")) {
                deleteArticle(this.article.articleno, () => {
                    this.$router.push({
                        name: "BoardList",
                    });
                });
            }
        },
    },
};
</script>

<style scoped>
.boardView {
    padding: 0 200px;
    font-size: 20px;
    margin: 50px 0;
}

.boardTitle {
    margin: 0;
    margin-bottom: 30px;
    font-size: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-edit {
    font-size: 40px;
    padding-right: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 0;
    border-bottom: 2px solid var(--border-color);
}

.left {
    font-weight: 700;
}

.right,
.info {
    display: flex;
}

.info {
    margin-top: 20px;
}

.no,
.userid {
    margin-right: 20px;
}

.content {
    height: 230px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 20px;
    font-size: 25px;
    overflow-y: scroll;
}

.btnBox {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.btn {
    outline: none;
    padding: 2px 0;
    width: 50px;
    background-color: white;
    text-decoration: none;
    font-weight: 600;
    border-style: none;
    border-radius: 5px;
    color: var(--mild-color);
    border: 1px solid var(--mild-color);
}

.btn:hover {
    cursor: pointer;
    color: var(--hover-color);
}

.deleteBtn,
.modifyBtn {
    margin-left: 20px;
}

h1 {
    color: var(--mild-color);
    font-weight: 900;
}

.btn:hover {
    background-color: var(--mild-color);
    color: white;
}
</style>
