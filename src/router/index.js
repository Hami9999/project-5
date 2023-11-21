import { createRouter, createWebHistory } from 'vue-router'
import StandartLayout from "@/Layouts/StandartLayout.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import UserLayout from "@/Layouts/UserLayout.vue";
import store from "@/store";
import UserImagesView from "@/views/UserImagesView.vue";
import EventsView from "@/views/EventsView.vue";
import BooksView from "@/views/BooksView.vue";
import BookView from "@/views/BookView.vue";
import EventView from "@/views/EventView.vue";

const routes = [

  {
    path: '/',
    name: 'register',
    component: RegisterView,
    meta: { PageLayout: StandartLayout }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { PageLayout: StandartLayout }
  },



  {
    path: '/user-profile',
    name: 'user-profile',
    component: UserView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },

  {
    path: '/user-images',
    name: 'user-images',
    component: UserImagesView,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'login',
        })
      }
      next()
    }
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
