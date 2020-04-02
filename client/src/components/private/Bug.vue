<template>
  <div>    
  <h1>{{assignedurl}}</h1>
    <AppUser :imageurl="assignedurl" :username="assignedName"/> 
<select v-model="priority">
 <option :value="null">Select...</option>
 <option value="critical">critical</option>
 <option value="high">high</option>
 <option value="medium">medium</option>
 <option value="low">low</option>
            <option value="5">Other</option>
</select>    

  </div>  
</template>

<script>
import AppUser from '../AppUser.vue'
export default {
name: 'Bug' ,
data:function(){
return {
    priority:null
}
},
components:{
    AppUser
},
props: {
  assignedurl:String,//5.jpg
  assignedName:String  
}
}
</script>
<style>
</style>
