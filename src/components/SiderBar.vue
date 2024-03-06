<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/HomePage">HomePage</router-link>
      </li>
      <li>
        <router-link to="/AboutPage">AboutPage</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SiderBar",
};
</script>

<style>
.sidebar ul {
  display: flex;
  flex-direction :column;
  gap: 20px;
}
</style>