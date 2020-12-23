import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../views/Categorias.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: () => import('../views/Articulos.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// si para donde voy requiere autenti, pregunto si hay token activo
router.beforeEach( (to , from, next) => {

  if (to.matched.some( destinoRequiereAut => destinoRequiereAut.meta.requiresAuth)) {
    // pregunta token
    if (localStorage.getItem('token'))
    {
      next();
    } else{
      next({
        path: '/login'
      })
    }
  } else{
    next();
  }

})

export default router
