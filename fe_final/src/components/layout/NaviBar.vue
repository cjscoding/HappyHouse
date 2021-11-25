<template>
<header class="header">
    <router-link class="header_logo" :to="{ name: 'Home' }">
        <i class="fas fa-home"></i> Happy House
    </router-link>
    <div class="header_nav">
        <router-link class="nav_menu nav_map" :to="{ name: 'House' }"><span>매물검색 <i class="fas fa-laptop-house"></i></span></router-link>
        <router-link class="nav_menu nav_board" :to="{ name: 'Board' }">게시판 <i class="far fa-edit"></i></router-link>
        <router-link class="nav_menu nav_news" :to="{ name: 'News' }">부동산뉴스<img class="news_logo" src="@/assets/newspaper.svg" alt="news_logo"></router-link>
        <router-link class="nav_menu nav_quiz" :to="{ name: 'Quiz' }">부동산 퀴즈 <i class="far fa-laugh-squint"></i></router-link>

        <div class="afterLogin" v-if="userInfo">
            <div>{{ userInfo.username }}님 환영합니다.</div>
            <div class="level" :class="[isWhite?'white':'', isBronze?'bronze':'', isSilver?'silver':'', isGold?'gold':'', isDiamond?'diamond':'']">{{level}}</div>
            <div class="dropdown">
                <button class="dropbtn"><i class="far fa-user"></i></button>
                <div class="dropdown-content">
                    <router-link :to="{ name: 'MyPage' }" class="myInfoBtn"><i class="fas fa-info-circle"></i> 마이페이지</router-link>
                    <div class="logoutBtn" @click.prevent="onClickLogout">
                        <i class="fas fa-sign-out-alt"></i> 로그아웃
                    </div>
                </div>
            </div>
        </div>

        <div class="beforeLogin" v-else>
            <div class="dropdown">
                <button class="dropbtn"><i class="far fa-user"></i></button>
                <div class="dropdown-content">
                    <router-link :to="{ name: 'SignIn' }">
                        <i class="fas fa-key"></i> 로그인
                    </router-link>
                    <router-link :to="{ name: 'SignUp' }">
                        <i class="fas fa-sign-in-alt"></i> 회원가입
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex";

const memberStore = "memberStore";

export default {
    name: "NaviBar",
    data() {
        return {
            isWrite:false,
            isBronze:false,
            isSilver:false,
            isGold:false,
            isDiamond:false,
            level:"",
        }
    },
    created() {
        let score = this.userInfo.score;
        if(score < 10){
            this.isWrite = true;
            this.level = "W";
        }else if(score < 30){
            this.isBronze = true;
            this.level = "B";
        }else if(score < 50){
            this.isSilver = true;
            this.level = "S";
        }else if(score < 70){
            this.isGold = true;
            this.level = "G";
        }else if(score >= 70){
            this.isDiamond = true;
            this.level = "D";
        };
        console.log(this.isSilver);

    },
    computed: {
        ...mapState(memberStore, ["isLogin", "userInfo"]),
    },
    methods: {
        ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
        onClickLogout() {
            this.SET_IS_LOGIN(false);
            this.SET_USER_INFO(null);
            sessionStorage.removeItem("access-token");
            if (this.$route.path != "/")
                this.$router.push({
                    name: "Home",
                });
        },
    },
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 90px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 20px 200px;
    background-color: white;
    font-weight: 700;
    z-index: 99;
    top: 0;
    box-shadow: 0 0 3px var(--shadow-color);
}

.header_logo {
    color: var(--main-color);
    font-size: 45px;
    text-decoration: none;
}

.header_nav {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 23px;
}

.nav_menu {
    margin-right: 25px;
    text-decoration: none;
    color: var(--main-color);
    cursor: pointer;
    position: relative;
}

.nav_menu:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--main-color);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.nav_menu:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.nav_menu>span {
    display: flex;
    align-items: center;
}

.nav-user,
.logoutBtn {
    cursor: pointer;
}

.fa-user {
    margin-right: 5px;
}

.afterLogin {
    display: flex;
}

.dropbtn {
    background-color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    margin-left: 10px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: center;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content>*:hover {
    color: var(--main-color);
}

.news_logo {
    width: 25px;
    height: 30px;
    padding-left: 5px;
}

.fa-edit,
.fa-laptop-house,
.fa-laugh-squint
 {
    color: black;
    font-size: 15px;
}

.fa-laptop-house {
    margin-left: 5px;
}
.level{
    margin-left: 10px;
    border-radius: 50%;
    font-size: 30px;
    padding-top: 5px;
    width: 30px;
    height: 30px;
    border:1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

.bronze{
    color: white;
    background-color: rgba(189, 141, 141, 0.658);
    border: 1px solid rgba(189, 141, 141, 0.658);
}
.silver{
    color: white;
    background-color: silver;
    border: 1px solid silver;
}
.gold{
    color: white;
    background-color: gold;
    border: 1px solid gold;
}
.diamond{
    color: white;
    background-color: rgb(13, 233, 233);
    border: 1px solid rgb(13, 233, 233);
}
</style>
