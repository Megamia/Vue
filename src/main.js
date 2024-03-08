import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import DashBoard from './pages/DashBoard';
import AboutPage from './pages/AboutPage';
import SiderBar from './components/SiderBar.vue';


const routes = [
    {path: '/',component: SiderBar},
    {path: '/DashBoard',component: DashBoard},
    {path: '/AboutPage',component: AboutPage},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
