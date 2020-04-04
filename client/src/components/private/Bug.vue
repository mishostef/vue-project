<template>
  <div>    
  <h1>{{bug.assignedurl}}</h1>
    <AppUser :imageurl="bug.assignedurl" :username="bug.assignedName"/> 
<select v-model="priority">
 <option :value="null">Select...</option>
 <option value="critical">critical</option>
 <option value="high">high</option>
 <option value="medium">medium</option>
 <option value="low">low</option>
            <option value="5">Other</option>
</select>    
<button @click="activate(bug)">click</button>
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
props: {bug:Object
  //id:Number,
  //assignedurl:String,//5.jpg
  //assignedName:String  
},
methods: {
  activate(bug) {
  this.$emit('update-container',bug)
    }
}
}
</script>
<style>
</style>
