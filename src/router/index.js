import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
// import Services from '../views/Services.vue'
// import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/services/building',
    name: 'Building',
    component: () => import('../views/services/Building.vue')
  },
  {
    path: '/services/consultancy',
    name: 'Consultancy',
    component: () => import('../views/services/Consultancy.vue')
  },
  {
    path: '/services/covering',
    name: 'Covering',
    component: () => import('../views/services/Covering.vue')
  },
  {
    path: '/services/maintenance',
    name: 'Maintenance',
    component: () => import('../views/services/Maintenance.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
