import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin, NavbarPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueRouter from 'vue-router'; 
import routes from './components/routes';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
mode: 'history',
routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
