<template>
  <div class="hello">
    <div class="SiderBar">
      <SiderBar />
    </div>
    <div class="main">
      <HeaderLayout />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from "./SiderBar.vue";
import HeaderLayout from "./HeaderLayout.vue";
export default {
  name: "HelloWorld",
  components: {
    SiderBar,
    HeaderLayout,
  },
};
</script>

<style>
.hello {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-inline: 30px;
  padding-block: 20px;
}
.SiderBar {
  display: flex;
}
.main {
  display: flex;
flex:1;
  flex-direction: column;
  padding-inline-start: 20px;
}
/* .main-content{
} */
</style>