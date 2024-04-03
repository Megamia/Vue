import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import {store} from "./store/store";
import DashBoard from './pages/DashBoard';
import PhotoPage from './pages/PhotoPage';
import UsersPage from './pages/UsersPage.vue';
import DocumentPage from './pages/DocumentPage.vue';
import TestPage from './pages/Test/TestPage.vue';
import PaginationLayout from './components/PaginationLayout.vue';
import HierarchyPage from './pages/HierarchyPage.vue';
import TestModal from './pages/Test/TestModal.vue';
import AddModal from './pages/Test/AddModal.vue';
import TestPage1 from './pages/Test/TestPage1.vue';
import TestPage2 from './pages/Test/TestPage2.vue';
import FilterComponent from './pages/Test/Search/FilterComponent.vue';
const routes = [
    {path: '/App',component: App},
    {path: '/DashBoard',component: DashBoard},
    {path: '/PhotoPage',component: PhotoPage},
    {path: '/UsersPage',component: UsersPage},
    {path: '/DocumentPage',component: DocumentPage},
    {path: '/TestPage',component: TestPage},
    {path: '/PaginationLayout',component: PaginationLayout},
    {path: '/HierarchyPage',component: HierarchyPage},
    {path: '/TestModal',component: TestModal},
    {path: '/AddModal',component: AddModal},
    {path: '/TestPage1',component: TestPage1},
    {path: '/TestPage2',component: TestPage2},
    {path: '/FilterComponent',component: FilterComponent},

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(store).mount('#app');
