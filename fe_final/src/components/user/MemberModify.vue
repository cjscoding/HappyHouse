<template>
<div class="modifyContainer">
    <h1>정보수정<i class="fas fa-user-edit"></i></h1>
    <form class="modifyForm">
        <div class="inputBox">
            <label for="userid">아이디</label>
            <input type="text" id="userid" v-model="user.userid" required placeholder="아이디 입력...." :disabled="isUserid" ref="userid" />
            <label for="userpwd">비밀번호</label>
            <input type="password" id="userpwd" v-model="user.userpwd" required placeholder="비밀번호 입력...." />
            <label for="userpwd">이름</label>
            <input type="text" id="username" v-model="user.username" required placeholder="비밀번호 입력...." />
            <label for="userpwd">이메일</label>
            <input type="email" id="email" v-model="user.email" required placeholder="비밀번호 입력...." />
        </div>
        <div class="btnBox">
            <button type="button" @click="updateMember">수정</button>
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
    name: "UpdateUser",
    data() {
        return {
            user: {
                userid: null,
                username: null,
                email: null,
                userpwd: null,
                score: 0,
            },
            isUserid: true,
        }
    },
    mounted() {
        console.log(this.$route);
        this.user.userid = this.userInfo.userid;
    },
    computed: {
        ...mapState(memberStore, ["isUpdate", "userInfo"])
    },
    methods: {
        ...mapActions(memberStore, ["userUpdate", "getUserInfo"]),
        async updateMember() {
            this.user.score = this.userInfo.score;
            await this.userUpdate(this.user);
            console.log(this.isUpdate);
            if (this.isUpdate) {
                let token = sessionStorage.getItem("access-token");
                console.log(token);
                await this.getUserInfo(token);
                this.$router.push({
                    name: "MyPage",
                })
            }
        }
    }

};
</script>

<style scoped>
.modifyContainer {
    padding: 0 500px;
}

h1 {
    margin: 50px 0 20px 0;
    font-size: 70px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.fa-user-edit {
    font-size: 40px;
    margin-left: 15px;
}

.modifyForm {
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
