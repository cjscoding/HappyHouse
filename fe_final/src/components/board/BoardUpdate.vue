<template>
<div class="boardUpdate">
    <h1 class="boardTitle"><i class="far fa-edit"></i>글수정</h1>
    <board-write-form type="modify" />
</div>
</template>

<script>
import BoardWriteForm from "./child/BoardWriteForm.vue";

export default {
    name: "BoardUpdate",
    components: {
        BoardWriteForm,
    },
};
</script>

<style scoped>
.boardUpdate {
    margin: 50px;
    padding: 0 200px;
}

.boardTitle {
    margin: 0;
    display: flex;
    justify-content: center;
}

h1 {
    color: var(--mild-color);
    font-weight: 900;
    font-size: 60px;
    display: flex;
    align-items: center;
}

.fa-edit {
    font-size: 40px;
    padding-right: 20px;
}
</style>
