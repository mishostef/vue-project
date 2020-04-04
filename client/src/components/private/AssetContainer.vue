<template>
<div>
    <div >
        <Bug v-for="item in items" :bug="item" :key="item.id" @update-container="updateContainer"/>
    </div>
</div>
</template>

<script>
import Bug from './Bug.vue'
export default {
name: 'AssetContainer' ,
data:function(){
return {
    items: [
          { id: 5, assignedName: 'Banana', assignedurl: '5.jpg' },
          { id: 6, assignedName: 'Orange', assignedurl: '5.jpg' },
          { id: 7, assignedName: 'Metal', assignedurl: '5.jpg' },
        ],
        selected:-1
}
},
components:{
    Bug
},
props: {
    
},
methods: {
      updateContainer(e) {
          console.log("dsfsdf")
        console.log(e.id);        
      }
}
}
</script>
<style>
</style>
