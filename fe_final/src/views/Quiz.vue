<template>
<div class="quiz">
    <div class="quiz_img">
        <p class="main_text">Happy Quiz</p>
    </div>
    <h2 class="quiz_title">등급을 올리기 위해 퀴즈를 풀어보세요! <i class="far fa-laugh-squint"></i></h2>
    <quiz-list></quiz-list>
</div>
</template>

<script>
import QuizList from "@/components/quiz/QuizList.vue";
export default {
    name: "House",
    components: {
        QuizList,
    },
    created() {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    },
};
</script>

<style scoped>
.quiz {
    margin-top: 90px;
}

.quiz_img {
    background-image: url("../assets/quiz.jpg");
    background-color: #cccccc;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.main_text {
    color: white;
    text-shadow: 1px 1px 3px rgb(121, 51, 212);
    font-size: 140px;
    position: absolute;
    left: 200px;
    top: 140px;
}
.quiz_title{
  padding: 0 200px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: textAnimation 2.5s ease-in-out infinite;
}
.fa-laugh-squint{
  margin-left: 10px;
}
@keyframes textAnimation{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
</style>
