import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import DashBoard from './pages/DashBoard';
import PhotoPage from './pages/PhotoPage';
import UsersPage from './pages/UsersPage.vue';
import DocumentPage from './pages/DocumentPage.vue';
import TestPage from './pages/Test/TestPage.vue';
import PaginationLayout from './components/PaginationLayout.vue';
import HierarchyPage from './pages/HierarchyPage.vue';

const routes = [
    {path: '/App',component: App},
    {path: '/DashBoard',component: DashBoard},
    {path: '/PhotoPage',component: PhotoPage},
    {path: '/UsersPage',component: UsersPage},
    {path: '/DocumentPage',component: DocumentPage},
    {path: '/TestPage',component: TestPage},
    {path: '/PaginationLayout',component: PaginationLayout},
    {path: '/HierarchyPage',component: HierarchyPage},

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
