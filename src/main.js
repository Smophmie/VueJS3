import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'

import home from './views/home.vue';
import about from './views/about.vue';

const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
