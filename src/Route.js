import { createRouter, createWebHistory } from 'vue-router';
import GitRepo from './components/gitRepo.vue';
import AboutComponent from './components/AboutComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import CreateRepo from './components/createRepo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
  {
    path: '/gitRepo',
    name: 'gitRepo',
    component: GitRepo,
  },
  {
    path: '/createRepo',
    name: 'createRepo',
    component: CreateRepo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
