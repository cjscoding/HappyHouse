<template>
<div class="home">
    <ul class="slideshow">
        <li>HAPPY HOUSE</li>
        <li>HAPPY HOUSE</li>
        <li>HAPPY HOUSE</li>
        <li>HAPPY HOUSE</li>
        <li>HAPPY HOUSE</li>
    </ul>
    <div class="goHouse">
        <div class="goHouse_text">
            <router-link :to="{ name: 'House' }" class="text">
                <p>지역별 부동산 거래내역</p>
                <i class="fas fa-angle-right"></i>
            </router-link>
        </div>
        <div class="local_lists">
            <div class="local_list seoul">
                <div class="local_img img_seoul"></div>
                <div class="local_name">서울 (Seoul)</div>
            </div>
            <div class="local_list daejeon">
                <div class="local_img img_daejeon"></div>
                <div class="local_name">대전 (Daejeon)</div>
            </div>
            <div class="local_list gwangju">
                <div class="local_img img_gwangju"></div>
                <div class="local_name">광주 (Gwangju)</div>
            </div>
            <div class="local_list busan">
                <div class="local_img img_busan"></div>
                <div class="local_name">부산 (Busan)</div>
            </div>
        </div>
    </div>
    <div class="goNews">
        <router-link :to="{ name: 'News' }" class="text">
            <p>지역별 부동산 뉴스</p>
            <i class="fas fa-angle-right"></i>
        </router-link>
        <div class="imgSlide">
            <div class="imgContainer">
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon2.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon3.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon4.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon5.svg" alt="">
                    <div class="img_shadow"></div>
                </div>

                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon2.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon3.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon4.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon5.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon.svg" alt="">
                    <div class="img_shadow"></div>
                </div>

                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon2.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
                <div class="imgBox">
                    <img class="news_img" src="../assets/newsIcon3.svg" alt="">
                    <div class="img_shadow"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="goJoin">
        <h4>아직 해피하우스 회원이 아니신가요?</h4>
        <h4>지금 바로 가입하고 더 많은 정보를 얻어가세요!</h4>
        <router-link :to="{ name: 'Member' }" class="text joinText">
            <p>가입하러 가기</p>
            <i class="fas fa-angle-right"></i>
        </router-link>
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
};
</script>

<style scoped>
.home {
    padding-top: 90px;
}

/* slideShow */
body {
    background-color: #000;
    list-style: none;
}

.slideshow {
    width: 100%;
    height: 500px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.slideshow li {
    width: 100%;
    height: 500px;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 15s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 250px;
    text-shadow: 1px 1px 2px var(--border-color), 0 0 5px var(--mild-color), 0 0 5px var(--border-color);
}

.slideshow li:nth-child(1) {
    background-image: url("../assets/aptImg/random/4.jpg");
}

.slideshow li:nth-child(2) {
    background-image: url("../assets/aptImg/random/7.jpg");
    animation-delay: 3s;
}

.slideshow li:nth-child(3) {
    background-image: url("../assets/board.jpg");
    animation-delay: 6s;
}

.slideshow li:nth-child(4) {
    background-image: url("../assets/news.jpg");
    animation-delay: 9s;
}

.slideshow li:nth-child(5) {
    background-image: url("../assets/aptImg/random/1.jpg");
    animation-delay: 12s;
}

.no-cssanimations .slideshow li {
    opacity: 1;
}

/* goHouse */
.goHouse {
    height: 550px;
    padding: 30px 200px;
}

.goHouse_text {
    padding: 20px;
    text-decoration: none;
    text-align: center;
}

.text:hover {
    text-decoration: none;
}

.text {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}

.text>p {
    margin: 0;
}

.text>i {
    padding-left: 10px;
}

.local_lists {
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.local_list {
    width: 250px;
    height: 350px;
    display: grid;
    grid-template-rows: 4fr 1fr;
    border-radius: 10px;
    box-shadow: 1px 1px 4px var(--shadow-color);
}

.local_list:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
}

.local_img {
    background-color: #cccccc;
    height: 280px;
    width: inherit;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 10px 10px 0 0;
}

.img_seoul {
    background-image: url("../assets/aptImg/local/seoul.jpg");
}

.img_daejeon {
    background-image: url("../assets/aptImg/local/daejeon.jpg");
}

.img_gwangju {
    background-image: url("../assets/aptImg/local/gwangju.jpg");
}

.img_busan {
    background-image: url("../assets/aptImg/local/busan.jpg");
}

.local_name {
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 30px;
}

/* goNews */
.goNews {
    height: 400px;
    background-color: #f6f6fa;
    padding-top: 40px;
}

.imgSlide {
    height: 60%;
    margin-top: 50px;
    overflow: hidden;
}

.imgContainer {
    height: 100%;
    width: 100vw;
    display: flex;
    animation: slide 20s linear infinite;
}

.imgBox {
    margin: 0 25px;
}

.imgBox:hover {
    transform: rotateY(360deg);
    transition: transform 1.5s ease-in-out;
}

.news_img {
    height: 190px;
    width: 190px;
}

.img_shadow {
    margin-left: 35px;
    margin-top: 10px;
    content: "";
    width: 120px;
    height: 12px;
    border-radius: 100%;
    background-color: rgba(175, 181, 187, 0.4);
}

/* goJoin */
.goJoin {
    height: 250px;
    padding: 40px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.joinText {
    font-size: 35px;
}

.joinText:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in;
}

/* animation */
@keyframes imageAnimation {
    0% {
        opacity: 0;
        animation-timing-function: ease-in;
    }

    10% {
        opacity: 1;
        animation-timing-function: ease-out;
    }

    20% {
        opacity: 1;
    }

    30% {
        opacity: 0;
    }
}

@keyframes slide {
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(-1200px);
    }
}
</style>
