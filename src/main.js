import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import DashBoard from './pages/DashBoard';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage.vue'

const routes = [
    {path: '/',component: App},
    {path: '/DashBoard',component: DashBoard},
    {path: '/AboutPage',component: AboutPage},
    {path: '/UsersPage',component: UsersPage},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
