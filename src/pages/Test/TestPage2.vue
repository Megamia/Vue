<template>
  <div class="count">
    <input type="text" v-model="newus" />
    <button @click="increament">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="addUser">AddUser</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newus: "",
    };
  },
  methods: {
    increament() {
      this.$store.state.result++;
    },
    decrement() {
      this.$store.state.result--;
    },
    addUser() {
      this.users.push({ Name: this.newus });
      alert("Đã thêm " + this.newus + " thành công!");
    },
  },
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
