<template>
  <div class="boardWrite">
    <form @submit="onSubmit" @reset="onReset">
      <div class="inputContainer">
        <label for="userid">작성자</label>
        <input
          id="userid"
          class="userid"
          :disabled="isUserid"
          v-model="id"
          type="text"
          ref="userid"
          placeholder="작성자 입력..."
        />

        <label for="subject">제목</label>
        <input
          id="subject"
          class="subject"
          v-model="article.subject"
          type="text"
          ref="subject"
          placeholder="제목 입력..."
        />

        <label for="content">내용</label>
        <textarea
          id="content"
          class="content"
          v-model="article.content"
          ref="content"
          placeholder="내용 입력..."
        ></textarea>
      </div>
      <div class="btnBox">
        <b-button type="submit" v-if="this.type === 'register'" class="btn">
          글작성
        </b-button>
        <b-button type="submit" v-else class="btn">글수정</b-button>
        <b-button type="reset" class="resetBtn btn">글목록</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { writeArticle, getArticle, modifyArticle } from "@/api/board";
import { mapState } from 'vuex';

const memberStore = "memberStore";

export default {
  name: "BoardWriteForm",
  data() {
    return {
      article: {
        articleno: 0,
        userid: "",
        subject: "",
        content: "",
      },
      isUserid: false,
    };
  },
  computed:{
    ...mapState(memberStore, ["userInfo"]),
    id(){
      return this.userInfo.userid;
    },
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      getArticle(
        this.$route.params.articleno,
        ({ data }) => {
          // this.article.articleno = data.article.articleno;
          // this.article.userid = data.article.userid;
          // this.article.subject = data.article.subject;
          // this.article.content = data.article.content;
          this.article = data;
        },
        (error) => {
          console.log(error);
        }
      );
      this.isUserid = true;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
        !this.article.subject &&
        ((msg = "제목 입력해주세요"),
        (err = false),
        this.$refs.subject.focus());
      err &&
        !this.article.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else
        this.type === "register" ? this.registArticle() : this.updateArticle();
    },
    onReset(event) {
      event.preventDefault();
      this.article.articleno = 0;
      this.article.subject = "";
      this.article.content = "";
      this.$router.push({ name: "BoardList" });
    },
    registArticle() {
      writeArticle(
        {
          userid: this.id,
          subject: this.article.subject,
          content: this.article.content,
        },
        ({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    updateArticle() {
      modifyArticle(
        {
          articleno: this.article.articleno,
          userid: this.article.userid,
          subject: this.article.subject,
          content: this.article.content,
        },
        ({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.push({ name: "BoardList" });
        },
        (error) => {
          console.log(error);
        }
      );
    },
    moveList() {
      this.$router.push({ name: "BoardList" });
    },
  },
};
</script>

<style scoped>
.boardWrite {
  margin-top: 20px;
}
.inputContainer {
  display: flex;
  flex-direction: column;
}
label {
  margin: 10px 0;
  font-weight: 700;
  font-size: 25px;
}
input,
textarea {
  font-size: 20px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  opacity: 0.8;
}
textarea {
  height: 120px;
  margin-bottom: 10px;
  padding: 5px 10px;
}
.btnBox {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 50px;
}
.resetBtn {
  margin-left: 20px;
}
.btn {
  outline: none;
  padding: 2px 0;
  width: 50px;
  background-color: white;
  text-decoration: none;
  font-weight: 600;
  border-style: none;
  border-radius: 5px;
  color: var(--mild-color);
  border: 1px solid var(--mild-color);
}

.btn:hover {
  cursor: pointer;
  background-color: var(--mild-color);
  color: white;
}
</style>
