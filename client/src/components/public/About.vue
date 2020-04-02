<template>
  <div class="row">
    <div class="col-sm-3">
        <p>address:</p>
        <p>{{address}}</p>
        <p>phone:</p>
        <p>{{tel}}</p>        
    </div>
    <div class="col-sm-9">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=sofia%20%D0%91%D0%B0%D1%87%D0%BE%20%D0%9A%D0%B8%D1%80%D0%BE%208&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/roblox-promo-codes/"></a></div></div>
    </div>  
  </div>
</template>

<script>

export default {

name: 'About' ,//this is the name of the component
data:function(){
    return{
    address:"8, Bacho Kiro street",
    tel: "02777777",
    manager: "Man Ager"
    }
}
}
</script>
<style>
.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
p{
    color:blue;
}
</style>
