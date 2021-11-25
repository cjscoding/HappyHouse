<template>
<div class="board">
    <div class="board_img">
        <p class="main_text">Happy Board</p>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Board",
    created() {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    },
};
</script>

<style scoped>
.board {
    margin-top: 90px;
}

.board_img {
    background-image: url("../assets/board.jpg");
    background-color: #cccccc;
    height: 350px;
    background-position: calc(0 200px);
    background-repeat: no-repeat;
    background-size: cover;
}

.main_text {
    position: absolute;
    color: white;
    font-size: 140px;
    left: 300px;
    top: 170px;
    text-shadow: 1px 1px 3px rgb(139, 124, 34);
}
</style>
