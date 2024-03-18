<template>
  <div class="hello">
    <div class="SiderBar">
      <SiderBar />
    </div>
    <div class="main">
      <router-view />
      <PaginationLayout
        class="pagination"
        @update-selected-option="updateSelectedOption"
      />
    </div>
    <button @click="Show">Show</button>
  </div>
</template>

<script>
import SiderBar from "./SiderBar.vue";
import PaginationLayout from "./PaginationLayout.vue";
export default {
  name: "HelloWorld",
  components: {
    SiderBar,
    PaginationLayout,
  },
  prop: {
    selectedOption: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateSelectedOption(option) {
      this.selectedOption = option;
    },
    Show() {
      alert("SelectOption: ", this.selectedOption);
    },
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
  background-color: #f5f5f5;
}
.pagination {
  /* position: relative; */
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: row;
}
/* .main-content{
} */
</style>
