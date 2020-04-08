import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin, NavbarPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueRouter from 'vue-router'; 
import routes from './components/routes';

const axios = require('axios').default;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const baseURL = 'http://localhost:8083/api';

const router = new VueRouter({
mode: 'history',
routes
})


axios.interceptors.request.use(function (config) {
  if (!config.url.includes('http://')) { config.url = `${baseURL}/${config.url}`; }
  if (config.url.includes(baseURL)) { config.withCredentials = true; }
  return config;
}, function (err) {
  console.error(err);
  return Promise.reject(err);
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
