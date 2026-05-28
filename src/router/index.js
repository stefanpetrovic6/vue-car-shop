import Vue from 'vue'
import VueRouter from 'vue-router'
import Thelogin from '@/views/TheLogin.vue';
import TheRegister from '@/views/TheRegister.vue'
import TheHome from '@/views/TheHome.vue'
import TheProducts from '@/views/TheProducts.vue'
import TheSingleCar from '@/views/TheSingleCar.vue'
import TheAdmin from "@/views/TheAdmin.vue"
import store from '../store';



Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    name: 'login',
    component: Thelogin
  },
  {
    path: '/cars',
    name: 'cars',
    component: TheProducts
  },
  {
    path: '/register',
    name: 'register',
    component: TheRegister
  },
  {
    path: '/admin',
    name: 'admin',
    component: TheAdmin
  },
  {
    path: '/',
    name: 'home',
    component: TheHome
  },
  {
    path: '/cars/:id',
    name: 'pers',
    component: TheSingleCar
  }
  
]




const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name=="login") {
 
    if (!store.state.ulogovan) {
      
      next();
    } else {
     
      next({
        path: '/',  
      });
    }
  } else {
    
    next();
  }
});


router.beforeEach((to, from, next) => {
  if (to.name=="login"||to.name=="register") {

    if (!store.state.ulogovan) {
      
      next();
    } else {
      
      next({
        path: '/',  
      });
    }
  } else {
    
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.name == 'pers' && !store.state.ulogovan ) next({ name: 'login' })
  else next()
})

router.beforeEach((to, from, next) => {
  if (to.name == 'admin' && !store.state.admin ) next({ name: 'login' })
  else next()
})





export default router
