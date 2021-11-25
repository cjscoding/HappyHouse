<template>
  <tr class="bodyTr">
    <td>{{ articleno }}</td>
    <th>
      <router-link
        class="link"
        :to="{ name: 'BoardView', params: { articleno: articleno } }"
        >{{ subject }}</router-link
      >
    </th>
    <td>{{ userid }}</td>
    <td>{{ regtime }}</td>
    <td>{{ hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "BoardListRow",
  props: {
    articleno: Number,
    userid: String,
    subject: String,
    hit: Number,
    regtime: String,
  },
};
</script>

<style scoped>
.link:hover {
  text-decoration: none;
}
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
</style>
