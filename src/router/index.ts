import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import WorkPage from '../pages/WorkPage/WorkPage.vue'
import AboutPage from '../pages/AboutPage/AboutPage.vue'
import ContactPage from '../pages/ContactPage/ContactPage.vue'
import SkillsPage from '../pages/SkillsPage/SkillsPage.vue'
import QueensGamePage from '../pages/QueensGamePage/QueensGamePage.vue'

const routes= [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/work',
    name: 'work',
    component: WorkPage,
  },
  {
    path: '/work/queens-game',
    name: 'queens-game',
    component: QueensGamePage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsPage
  },
  {
    path:'/:pathMatch(.*)*',
    redirect:'/home'
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(import.meta.env.BASE_URL),
})

export {router};
