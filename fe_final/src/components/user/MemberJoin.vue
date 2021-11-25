<template>
<div class="joinContainer">
    <h1>회원가입<i class="fas fa-user-plus"></i></h1>
    <form class="joinForm">
        <div class="inputBox">
            <label for="userid">아이디</label>
            <input type="text" id="userid" v-model="user.userid" required placeholder="아이디 입력...." />
            <label for="userpwd">비밀번호</label>
            <input type="password" id="userpwd" v-model="user.userpwd" required placeholder="비밀번호 입력...." />
            <label for="userpwd">이름</label>
            <input type="text" id="username" v-model="user.username" required placeholder="비밀번호 입력...." />
            <label for="userpwd">이메일</label>
            <input type="email" id="email" v-model="user.email" required placeholder="비밀번호 입력...." />
        </div>
        <div class="btnBox">
            <button type="button" @click="registerMember">회원가입</button>
        </div>
    </form>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";

const memberStore = "memberStore";

export default {
    name: "SignUp",
    data() {
        return {
            user: {
                userid: null,
                username: null,
                email: null,
                userpwd: null
            }
        }
    },
    computed: {
        ...mapState(memberStore, ["isRegister"])
    },
    methods: {
        ...mapActions(memberStore, ["userRegister"]),
        async registerMember() {
            await this.userRegister(this.user);
            if (this.isRegister) {
                this.$router.push({
                    name: "SignIn",
                })
            }
        }
    }

};
</script>

<style scoped>
.joinContainer {
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

.fa-user-plus {
    font-size: 40px;
    margin-left: 15px;
}

.joinForm {
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
    width: 100%;
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
