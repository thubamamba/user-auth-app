import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import bootstrapVue from 'bootstrap-vue'

import Vuetify from 'vuetify'


import router from './router'
import store from './store'



Vue.use(Vuelidate)
Vue.use(Vuetify)

/* This sets a global default for axios */
axios.defaults.baseURL = 'https://ng-http-554b0.firebaseio.com' 
//axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
