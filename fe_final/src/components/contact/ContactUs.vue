<template>
<div class="contact">
    <h1><i class="far fa-address-card"></i>Contact Us</h1>
    <div class="members">
        <div class="member">
            <div class=""></div>
            <div class="icon"><i class="fas fa-user"></i></div>
            <div class="details">
                <span class="name">최지수</span>
                <span class="">SSAFY 6기 광주 4반</span>
                <span class="email">recruitcjs@gmail.com</span>
            </div>
        </div>
        <div class="member">
            <div class=""></div>
            <div class="icon"><i class="fas fa-user"></i></div>
            <div class="details">
                <span class="name">이명원</span>
                <span class="">SSAFY 6기 광주 4반</span>
                <span class="email">lamyunlee@naver.com</span>
            </div>
        </div>
        <div class="member">
            <div class=""></div>
            <div class="icon"><i class="fas fa-user"></i></div>
            <div class="details">
                <span class="name">이병석</span>
                <span class="">SSAFY 6기 광주 4반</span>
                <span class="email">s2_go@naver.com</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    created() {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    },
}
</script>

<style scoped>
.contact {
    padding: 140px 200px 50px 200px;
    font-size: 35px;
}

h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 80px;
}

.fa-address-card {
    margin-right: 15px;
    padding-bottom: 10px;
    font-size: 50px;
}

.icon {
    font-size: 120px;
    background-color: var(--mild-color);
    color: white;
    padding: 20px;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
}

.member {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr 1fr;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border-bottom: 1px solid var(--border-color);
    border-radius: 5px;
    width: 70%;
    padding: 20px;
}

.details {
    display: flex;
    flex-direction: column;
}
.members{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
}
</style>
