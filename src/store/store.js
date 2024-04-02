import { createStore } from "vuex";
// import { ref } from "vue";
import AddModal from "@/pages/Test/AddModal.vue";
// import { DataDashBoard } from "./data/DataDashBoard";
import DataDashBoard from "./modules/DataDashBoard";
import DataUsersPage from "./modules/DataUsersPage";
export const store = createStore({
namespaced:true,
modules:{
  DataDashBoard,
  DataUsersPage,
    AddModal
},
  state: {
    result: 10,
    users: [
      {
        Name: "Victoria Perez",
        UserID: "LA-0234",
        Lorem: "Lorem Ipsum",
        Date: "30 Apr, 2017 to 24 Otc 2020",
      },
      {
        Name: "Lena Page",
        UserID: "LA-0234",
        Lorem: "Lorem Ipsum",
        Date: "21 Aug, 2019 to 24 Otc 2020",
      },
      {
        Name: "Devin Harmon",
        UserID: "LA-0234",
        Lorem: "Lorem Ipsum",
        Date: "21 July, 2019 to 26 July 2020",
      },
      {
        Name: "Rena Paul",
        UserID: "LA-0234",
        Lorem: "Lorem Ipsum",
        Date: "30 Apr, 2017 to 24 Otc 2020",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
});
