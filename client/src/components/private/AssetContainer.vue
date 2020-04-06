<template>
<div class="row">
    <div class="col-sm-3 bg-secondary">
        <p>open</p>
        <Bug  v-for="item in items" :bug="item" :key="item.id" 
        @update-container="updateContainer"/>        
    </div>
    <div class="col-sm-3 bg-info">
        <p>in progress</p>
        <template v-if="selectedChildren.length">
        <Bug  v-for="item in selectedChildren" :bug="item" :key="item.id" 
        @update-container="updateContainer"/>        
        </template>
    </div>
    <div class="col-sm-3 bg-warning">
        <p>closed</p>
    </div>
    <div class="col-sm-3 bg-success">
        <p>done</p>
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
          { id: 5, assignedName: 'Banana', assignedurl: '5.jpg',selected:false },
          { id: 6, assignedName: 'Orange', assignedurl: '5.jpg',selected:false },
          { id: 7, assignedName: 'Metal', assignedurl: '5.jpg',selected:false },
        ],
        selectedChildren:[]
}
},
components:{
    Bug
},
props: {
    isHidden:Boolean
},
methods: {
      updateContainer(e) {
          console.dir(e)        
          
         var currentItem=(this.items.find(item=> item.id===e.id))
/*        console.log('currentIttem='+ currentItem)
        var currentAsJson = JSON.stringify(currentItem);
        console.log('currentAsJson'+currentAsJson)
        var currObj =JSON.parse(currentAsJson);
        console.log('currObj='+currObj);
        console.log(currObj);       
  */    
this.selectedChildren.push(currentItem)
//console.log('selectedChildren'+ this.selectedChildren[0].assignedName)


this.items=this.items.filter(item => item.id!==e.id)
console.log(this.items)

      }
}
}
</script>
<style>
.hidden{
    display:none;
}
</style>
