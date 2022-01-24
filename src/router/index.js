import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CalendarPage from '../views/CalendarPage.vue'
import TheFormPage from '../views/TheFormPage.vue'
import ThankYouPage from "../views/TheThankYouPage.vue"
import AboutPage from "../views/About.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/CalendarPage',
    name: 'CalendarPage',
    component: CalendarPage
  },
  {
  path: '/FormPage',
    name: 'TheFormPage',
    component: TheFormPage
  },
  {
    path: "/thanks",
    name: "ThankYouPage",
    component: ThankYouPage

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
