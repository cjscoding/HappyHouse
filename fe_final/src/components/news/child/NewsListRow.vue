<template>
  <div class="row">
    <div class="left">
      <img src="../img/news.jpg" alt="" />
    </div>
    <div class="right">
      <div class="">
        <h3>{{ title }}</h3>
        <p>
          {{ pubDate }}
          <a :href="news.link" target="_blank" class="link">뉴스 상세보기</a>
        </p>
      </div>
      <p class="desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Object,
  },
  created() {
    console.log(this.news);
  },
  computed: {
    title() {
      return this.news.title
        .replaceAll("<b>", "")
        .replaceAll("</b>", "")
        .replaceAll("&quot;", "")
        .replaceAll("&amp;", "");
    },
    description() {
      return this.news.description
        .replaceAll("<b>", "")
        .replaceAll("</b>", "")
        .replaceAll("&quot;", "")
        .replaceAll("&amp;", "");
    },
    pubDate() {
      return this.news.pubDate.replaceAll("+0900", "");
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 150px;
  border-radius: 5px;
  margin-right: 20px;
}

.row {
  box-shadow: 0 0 4px var(--shadow-color);
  border-radius: 5px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 7fr;
  height: 190px;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.link {
  margin-left: 10px;
}
.desc{
  margin: 0;
}
</style>
