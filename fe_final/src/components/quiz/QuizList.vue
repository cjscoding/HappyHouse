<template>
<div class="quiz_box">
    <div class="question">
        <span>문제</span>
        <p>{{ quizOne.question }}</p>
    </div>
    <div class="answer">
        <span>답</span>
        <input type="text" class="answer" v-model="answer" autofocus>
    </div>
    <div class="btnBox">
        <button type="button" @click="checkAnswer">제출하기</button>
        <button type="button" @click="goHome">홈으로 돌아가기</button>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
} from "vuex";

const quizStore = "quizStore";
const memberStore = "memberStore";

export default {
    name: "QuizList",
    data() {
        return {
            answer: "",
            quizOne: {},
            user: {},
        }
    },
    created() {
        let quizs = JSON.parse(JSON.stringify(this.quizList));
        let random = Number(Math.floor(Math.random() * (quizs.length + 1))) % 7;
        this.quizOne = quizs[random];
        console.log(quizs);
    },
    computed: {
        ...mapState(quizStore, ["quizList"]),
        ...mapState(memberStore, ["isUpdate", "userInfo"]),
    },
    methods: {
        ...mapActions(memberStore, ["userUpdate"]),
        async checkAnswer() {
            if (this.answer === this.quizOne.answer) {
                alert("정답입니다!");
                this.user = this.userInfo;
                console.log(this.userInfo);
                this.user.score += 10;
                await this.userUpdate(this.user);
                this.$router.push({
                    name: "Home",
                })
            } else {
                alert("오답입니다.");
                this.answer = "";
                this.$router.push({
                    name: "Quiz",
                })
            }
        },
        goHome() {
            this.$router.push({
                name: "Home"
            })
        }
    }
};
</script>

<style scoped>
.quiz_box,
.question,
.answer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.quiz_box {
    padding: 0 200px;
    margin: 50px 0;
}

span {
    font-size: 40px;
    margin-bottom: 20px;
    color: var(--mild-color);
}

p {
    margin: 0px 200px 20px 200px;
    font-size: 30px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    padding: 10px;
}

input {
    width: 500px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    padding-left: 10px;
    font-size: 30px;
}

.btnBox {
    margin-top: 30px;
}

button {
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    width: 100px;
}

button:hover {
    background-color: var(--mild-color);
    color: white;
    border: 1px solid var(--mild-color);
}

button:first-child {
    margin-right: 10px;
}
</style>
