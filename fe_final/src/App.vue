<template>
  <div id="app">
    <navi-bar />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import NaviBar from "./components/layout/NaviBar.vue";
import FooterBar from "./components/layout/FooterBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    FooterBar,
  },
};
</script>

<style>
:root {
  --main-color: rgb(43, 64, 250);
  --shadow-color: rgb(101, 101, 104);
  --mild-color: rgb(77, 94, 240);
  --hover-color: rgb(94, 163, 241);
  --border-color: rgb(158, 152, 161);
  --warn-color: rgb(245, 67, 67);
}

* {
  font-family: "Dongle", sans-serif;
}
</style>
