<template>
  <div id="app">
    <Nav/>
    <Slots url="/profile">
  <!-- Add a Font Awesome icon -->
  <span class="fa fa-user"></span>
  Your Profile
</Slots>
    <Home msg="This is home component"/>
  <p>users:</p>
  <AllUsers/>
  <p>apppuuusser</p>
  <img src="./assets/logo.png"/>
  <!--AppUser imageurl="5.jpg" username="Keith"/-->
<!--Bug assignedurl="5.jpg" assignedName="Keith"/-->
<AssetContainer/>
<router-link to="/about">About</router-link>
<router-link to="/login">Login</router-link>
<router-view></router-view> 

  </div>  


</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/common/Home.vue'
import Nav from './components/common/navbar.vue'
import Slots from  './components/slots.vue'
import AllUsers from './components/private/AllUsers.vue'
//import AppUser from './components/AppUser.vue'
//import Bug from './components/private/Bug.vue'
import AssetContainer from './components/private/AssetContainer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Nav,
    Slots,
    AllUsers,
   // AppUser
   //Bug
   AssetContainer
  },
  attrs:{
    src:require('./assets/logo.png')
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
