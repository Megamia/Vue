<template>
  <div class="hello">
    <div class="SiderBar">
      <SiderBar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import SiderBar from "./SiderBar.vue";
export default {
  name: "HelloWorld",
  components: {
    SiderBar,
  },
};
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #ffffff;
}
.SiderBar {
  display: flex;
}
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: max-content;
}
/* .main-content{
} */
</style>