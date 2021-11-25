<template>
<div class="boardRegist">
    <h1 class="boardTitle"><i class="far fa-edit"></i>글작성</h1>
    <board-write-form type="register" />
</div>
</template>

<script>
import BoardWriteForm from "./child/BoardWriteForm.vue";

export default {
    name: "BoardWrite",
    components: {
        BoardWriteForm,
    },
};
</script>

<style scoped>
.boardRegist {
    margin: 50px;
    padding: 0 200px;
}

.boardTitle {
    margin: 0;
}

h1 {
    color: var(--mild-color);
    font-weight: 900;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-edit {
    font-size: 40px;
    padding-right: 20px;
}
</style>
