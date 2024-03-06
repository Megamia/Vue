import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


const routes = [
    {path: '/HomePage',component: HomePage},
    {path: '/AboutPage',component: AboutPage},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
