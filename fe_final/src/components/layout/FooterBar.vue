<template>
<div class="footer">
    <div class="menu">
        <router-link :to="{ name: 'Home' }" class="footer_link">Home</router-link>
        <router-link :to="{ name: 'House' }" class="footer_link">House</router-link>
        <router-link :to="{ name: 'News' }" class="footer_link">News</router-link>
        <router-link :to="{ name: 'Quiz' }" class="footer_link">Quiz</router-link>
        <router-link :to="{ name: 'Contact' }" class="footer_link">Contact Us</router-link>
    </div>
    <div class="copyright">Copyright &copy; SSAFY_6_GwangJu_4_LLC</div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* footer */
.footer {
    height: 100px;
    background-color: rgb(63, 63, 172);
    padding: 20px 200px;
}

.footer_link {
    color: white;
    margin-right: 20px;
    font-size: 27px;
}

.copyright {
    color: white;
    font-size: 20px;
    font-size: 20px;
}
</style>
