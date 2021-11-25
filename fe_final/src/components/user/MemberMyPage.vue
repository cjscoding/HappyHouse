<template>
<div class="memberContainer">
    <div class="memberInfo" v-if="userInfo">
        <h1>My Page<i class="fas fa-user-tag"></i></h1>
        <div class="infoDetail">
            <p>아이디</p>
            <p>{{ userInfo.userid }}</p>
            <p>이름</p>
            <p>{{ userInfo.username }}</p>
            <p>등급</p>
            <p>{{ level }}</p>
            <p>이메일</p>
            <p>{{ userInfo.email }}</p>
            <p>가입일</p>
            <p>{{ userInfo.joindate }}</p>
        </div>
    </div>
    <div class="btnBox">
        <button class="modifyBtn btn" @click="moveUpdate">정보수정</button>
        <button class="quitBtn btn" @click="deleteMember">회원탈퇴</button>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapMutations,
    mapState
} from "vuex";

const memberStore = "memberStore";

export default {
    name: "MemberMyPage",
    components: {},
    computed: {
        ...mapState(memberStore, ["userInfo", "isDeleted"]),
        level() {
            let score = this.userInfo.score;
            if (score < 10) {
                return "White";
            } else if (score < 30) {
                return "Bronze";
            } else if (score < 50) {
                return "Silver";
            } else if (score < 70) {
                return "Gold";
            } else {
                return "Diamond";
            }
        }
    },
    methods: {
        ...mapActions(memberStore, ["userDelete"]),
        ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
        moveUpdate() {
            this.$router.push({
                name: "Update",
                param: {
                    userid: this.userInfo.userid,
                }
            })
        },
        async deleteMember() {
            console.log(this.userInfo.userid);
            await this.userDelete(this.userInfo.userid);
            console.log(this.isDeleted);
            this.SET_IS_LOGIN(false);
            this.SET_USER_INFO(null);
            sessionStorage.removeItem("access-token");
            if (this.$route.path != "/")
                this.$router.push({
                    name: "Home",
                });
        }
    }
};
</script>

<style scoped>
.memberContainer {
    padding: 0 200px;
}

.memberInfo {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    padding: 20px;
    color: var(--main-color);
}

h1 {
    width: 100%;
    text-align: center;
    font-size: 70px;
    border-bottom: 1px solid var(--main-color);
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-user-tag {
    font-size: 40px;
    margin-left: 15px;
}

.btnBox {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
}

button {
    border: 1px solid var(--main-color);
    border-radius: 5px;
    background-color: white;
    color: var(--main-color);
}

.modifyBtn:hover {
    color: white;
    background-color: var(--mild-color);
}

.quitBtn {
    margin-left: 10px;
}

.quitBtn:hover {
    color: white;
    background-color: var(--warn-color);
    border: var(--warn-color);
}

.infoDetail {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    font-size: 30px;
}

.infoDetail>p:nth-child(odd) {
    text-align: right;
    padding-right: 30px;
    opacity: 0.7;
}

.infoDetail>p:nth-child(even) {
    padding-left: 30px;
}
</style>
