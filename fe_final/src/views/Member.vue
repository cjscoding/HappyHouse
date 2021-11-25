<template>
<div class="member">
    <div class="member_img">
        <p class="main_text">Happy Page</p>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Member",
    created() {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    },
};
</script>

<style scoped>
.member {
    margin-top: 90px;
}

.member_img {
    background-image: url("../assets/member.jpg");
    background-color: #cccccc;
    height: 300px;
    width: inherit;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}

.main_text {
    position: absolute;
    color: white;
    font-size: 140px;
    right: 200px;
    top: 140px;
    text-shadow: 1px 1px 3px rgb(104, 70, 8);
}
</style>
