<template>
  <div class="result">
    <p>Kết quả là {{ result }}</p>
    <p v-for="user in users" :key="user.Name">Username: {{ user.Name }}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     users: [
  //       {
  //         Name: "Victoria Perez",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "30 Apr, 2017 to 24 Otc 2020",
  //       },
  //       {
  //         Name: "Lena Page",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "21 Aug, 2019 to 24 Otc 2020",
  //       },
  //       {
  //         Name: "Devin Harmon",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "21 July, 2019 to 26 July 2020",
  //       },
  //       {
  //         Name: "Rena Paul",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "30 Apr, 2017 to 24 Otc 2020",
  //       },
  //     ],
  //   };
  // },
  computed: {
    result() {
      return this.$store.state.result;
    },
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped></style>
