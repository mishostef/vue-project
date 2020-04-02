<template>
  <div>
    <h2>{{username}}</h2>
    <img :src="url" alt="userImg"> 
  </div>  
</template>

<script>
export default {
name: 'User' ,
props: [
  'imageurl',
  'username'  
  ],
computed:{
  url:function(){    
    var p = require(`../../public/${this.imageurl}`)
    return p;
  }
}
}
</script>
<style>
</style>
