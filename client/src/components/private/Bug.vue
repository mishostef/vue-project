<template>
  <div @click="activate(bug)">    
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
<!--button @click="activate(bug)">click</button-->
  </div>  
</template>

<script>
import AppUser from '../AppUser.vue'
export default {
name: 'Bug' ,
data:function(){
return {
    priority:null//,
   // selected1:false
}
},
components:{
    AppUser
},
props: {bug:Object
  //id:Number,
  //assignedurl:String,//5.jpg
  //assignedName:String ,
  //selected:Boolean 
},
mounted: function () {
    // `this` points to the vm instance
    //console.log('a is: ' + this.a)
  this.bug.selected=false;
  console.dir(this.bug);
  },
methods: {
  activate(bug) {bug.selected =true;
  this.$emit('update-container',bug)
    }
},
computed:{
selected1:function(){
return this.bug.selected;
}
}
}
</script>
<style>
</style>
