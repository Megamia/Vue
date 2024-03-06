<template>
  <div class="hello">
    <p>Using text interpolation: {{ msg }}</p>
    <p>Hôm nay trời đẹp quá: {{ sky }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <SiderBar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SiderBar from './SiderBar.vue';
export default {
  name: "HelloWorld",
  components: {
    SiderBar,
  },
  props: {
    msg: {
      type: String,
      default: "ABC",
    },
    sky: {
      type: String,
      default: "như con cá",
    },
  },
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>