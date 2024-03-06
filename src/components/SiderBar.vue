<template>
  <div class="sidebar">
    <div>
      <span class="logo"> YOURLOGO </span>
    </div>
    <div class="page">
      <span>
        <font-awesome-icon :icon="['far', 'file']" />
        <router-link to="/HomePage">HomePage</router-link>
      </span>
      <font-awesome-icon :icon="['fas', 'user']" />
      <span>
        <router-link to="/AboutPage">AboutPage</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faFile } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "SiderBar",
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    this.$fontAwesome.library.add(faUser, faFile);
  },
};
</script>

<style>
.sidebar {
}
.page {
  display: flex;
  flex-direction: column;
}
.page span {
  display: flex;
  flex: 1;
}
.page span a {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-block-start: 10px;
  text-decoration: none;
  padding-right: 40px;
}

.page span a:active,
.page span a:focus {
  border-right: 2px solid blue;
  color: blue;
}
</style>
