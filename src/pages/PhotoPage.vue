<template>
  <div class="photo">
    <span>PhotoPage </span>
    <button @click="goAboutPage">Go AboutPage</button>
  </div>
</template>

<script>
export default {
  name: "PhotoPage",
  methods: {
    goAboutPage() {
      this.$router.push("/HierarchyPage");
    },
  },
};
</script>

<style scoped>
.photo {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
}
</style>
