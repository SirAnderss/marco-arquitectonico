import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/panel',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogView',
    props: true,
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      let user = firebase.auth().currentUser;
      if (to.name !== 'Login' && !user) next({ name: 'Login' })
      else next()
    }
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
