import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CustomerDetails from './views/CustomerDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
	
	{
          path: '/movies',
              name: 'movies',
          // route level code-splitting
          // this generates a separate chunk (customers.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "movies" */ './views/Movie.vue')
        },

        {
          path: '/movie-details/:userId',
          name: 'movie-details',
          // component: CustomerDetails
          // route level code-splitting
          // this generates a separate chunk (customers.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "customers" */ './views/MovieDetails.vue')
        },
        {
          path: '/movie-details/:userId/rented',
          name: 'movie-rentals',
          // component: CustomerRentals
          // route level code-splitting
          // this generates a separate chunk (customers.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "customers" */ './views/MovieRentalHistory.vue')
        },
		
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/Customer.vue')
    },
    {
      path: '/customer-details/:userId',
      name: 'customer-details',
      // component: CustomerDetails
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerDetails.vue')
    },
	
    {
      path: '/customer-details/:userId/rentals',
      name: 'customer-rentals',
      // component: CustomerRentals
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerRentalHistory.vue')
    }
  ]
})