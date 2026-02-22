import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/index.css'

// Pages
import HomePage from './pages/HomePage.vue'
import CodingChallengesPage from './pages/CodingChallengesPage.vue';
import ContactPage from './pages/ContactPage.vue';

// Routes
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: '/coding-challenges', name: 'Coding Challenges', component: CodingChallengesPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
