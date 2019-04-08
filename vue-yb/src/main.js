import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Add Bootstrap for styling */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
