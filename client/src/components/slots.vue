<template>
 <a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>
  
</template>

<script>

export default {

name: 'Slots' ,//this is the name of the component
props: {
  url:String,
  user:{
    name:String
  }
  }
}
</script>
<style>
</style>