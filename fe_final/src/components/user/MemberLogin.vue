<template>
<div class="loginContainer">
    <h1>로그인<i class="fas fa-user-check"></i></h1>
    <form class="loginForm">
        <alert v-if="isLoginError">아이디 또는 비밀번호를 확인하세요.</alert>
        <div class="inputBox">
            <label for="userid">아이디</label>
            <input id="userid" v-model="user.userid" required placeholder="아이디 입력...." @keyup.enter="confirm" />
            <label for="userpwd">비밀번호</label>
            <input type="password" id="userpwd" v-model="user.userpwd" required placeholder="비밀번호 입력...." @keyup.enter="confirm" />
        </div>
    </form>
    <div class="btnBox">
        <button type="button" @click="confirm">로그인</button>
        <button type="button" @click="movePage">회원가입</button>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";

const memberStore = "memberStore";

export default {
    name: "MemberLogin",
    data() {
        return {
            user: {
                userid: null,
                userpwd: null,
            },
        };
    },
    computed: {
        ...mapState(memberStore, ["isLogin", "isLoginError"]),
    },
    methods: {
        ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
        async confirm() {
            await this.userConfirm(this.user);
            let token = sessionStorage.getItem("access-token");
            if (this.isLogin) {
                await this.getUserInfo(token);
                this.$router.push({
                    name: "Home",
                });
            }
        },
        movePage() {
            this.$router.push({
                name: "SignUp",
            });
        },
    },
};
</script>

<style scoped>
.loginContainer {
    padding: 0 500px;
}

h1 {
    margin: 50px 0 20px 0;
    font-size: 70px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-user-check {
    font-size: 40px;
    margin-left: 15px;
}

.loginForm {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inputBox {
    display: flex;
    flex-direction: column;
    width: 500px;
    font-size: 30px;
}

input {
    padding: 0 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    padding: 5px 10px;
    font-size: 20px;
}

.btnBox {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 50px 0;
}

button {
    margin-right: 10px;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    width: 60px;
    font-weight: 900;
}

button:hover {
    background-color: var(--mild-color);
    border: var(--mild-color);
    color: white;
}
</style>
