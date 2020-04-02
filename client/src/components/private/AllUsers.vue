<template>
<div>
    <div v-for="user in info" :key="user._id">
        {{user.username}}
    </div>
</div>
</template>
<script>
const axios = require('axios').default;
export default {
data(){
    return{
    info:null,
    loading:true,
    errored:false
    }
},
mounted () {
    axios
      .get('http://localhost:8083/api/users')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
<style>
</style>