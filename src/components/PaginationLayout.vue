<template>
  <div class="main">
    <span>Items per page:</span>
    <select v-model="selectedOption" class="btnselect">
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.value }}
      </option>
    </select>

    <p>{{ selectedOption }} of {{ totalValue }}</p>
    <div class="btn">
      <button class="btn prev" @click="del" :disabled="selectedOption <= 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          id="back"
          class="icon"
        >
          <path
            d="m520 950.3-44.5-44.5-106.2-106.2-129-129-110.9-110.9-36.6-36.6c-5.8-5.8-11.3-12-17.4-17.4-.3-.2-.5-.5-.8-.8V519l44.5-44.5 106.2-106.2 129-129 110.9-110.9c18-18 36.5-35.5 54-54l.8-.8c9.1-9.1-5-23.3-14.1-14.1L461.4 104 355.2 210.2l-129 129-110.9 110.9c-18 18-36.5 35.5-54 54l-.8.8c-3.8 3.8-3.8 10.3 0 14.1l44.5 44.5 106.2 106.2 129 129 110.9 110.9c18 18 35.5 36.5 54 54l.8.8c9.1 9.2 23.2-5 14.1-14.1z"
          ></path>
          <path
            d="M67.3 522h853.2c11.5 0 23.1.2 34.6 0h1.5c12.9 0 12.9-20 0-20H103.4c-11.5 0-23.1-.2-34.6 0h-1.5c-12.8 0-12.8 20 0 20z"
          ></path>
        </svg>
      </button>
      <button class="btn next" @click="add" :disabled="selectedOption >= options.length">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          id="next"
          class="icon"
        >
          <path
            d="m532.3 978.6 44.5-44.5L683 827.9l129-129L922.9 588c18-18 36.3-35.7 54-54l.8-.8c11.5-11.5 11.5-30.9 0-42.4l-44.5-44.5L827 340.1l-129-129-110.9-110.9c-18-18-35.7-36.3-54-54l-.8-.8c-11.1-11.1-31.5-11.9-42.4 0-11 12-11.9 30.6 0 42.4l44.5 44.5 106.2 106.2 129 129 110.9 110.9c18 18 35.6 36.4 54 54l.8.8v-42.4l-44.5 44.5-106.2 106.2-129 129-110.9 110.9c-18 18-36.3 35.7-54 54l-.8.8c-11.1 11.1-11.9 31.5 0 42.4 11.9 11 30.5 11.9 42.4 0z"
          ></path>
          <path
            d="M956.7 482H103.5c-11.5 0-23.1-.1-34.6 0h-1.5c-15.7 0-30.7 13.8-30 30 .7 16.3 13.2 30 30 30h853.2c11.5 0 23.1.1 34.6 0h1.5c15.7 0 30.7-13.8 30-30-.8-16.3-13.2-30-30-30z"
          ></path>
        </svg>
      </button>
    </div>
    <button @click="Show">Show</button>
  </div>
</template>

<script>
import DashBoard from "../pages/DashBoard.vue";
import UsersPage from "../pages/UsersPage.vue";

export default {
  data() {
    return {
      selectedOption: 1,
      options: [
        { id: "1", value: "Page1" },
        { id: "2", value: "Page2" },
        { id: "3", value: "Page3" },
        { id: "4", value: "Page4" },
      ],
      totalValue: 10,
    };
  },
  methods: {
    add() {
      const nextpage = parseInt(this.selectedOption) + 1;
      this.selectedOption = nextpage;
    },
    del() {
      const prevpage = parseInt(this.selectedOption) - 1;
      this.selectedOption = prevpage;
    },
    Show() {
      alert(this.selectedOption);
    },
  },
  computed: {
    getPageComponents() {
      return (selectedOption) => {
        switch (selectedOption) {
          case "1":
            return DashBoard;
          case "2":
            return UsersPage;
          case "3":
            return DashBoard;
          case "4":
            return DashBoard;

          default:
            return null;
        }
      };
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100px;
  gap: 30px;
}
.btnselect {
  border-width: 0;
  border-bottom: 1px solid black;
  padding: 5px;
  background-color: #f5f5f5;
}
.btn {
  border-width: 0;
  background-color: #f5f5f5;
  cursor: pointer;
}
.btn button {
  margin-inline: 10px;
}
.btn:disabled {
  fill: gray;
}
.icon {
  width: 15px;
  height: 15px;
}
</style>
