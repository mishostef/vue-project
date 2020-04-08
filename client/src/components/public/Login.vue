<template>
    <div>
        <form @submit.prevent="submitHandler">
            <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-4">
                <input id="username" v-model="username" name ="username" @blur="$v.username.$touch" class="form-control" />
            </div>
            <div class="col-sm-6"></div>
            <template v-if="$v.username.$error">
                <div v-if="!$v.username.required">Username is required!</div>
                <div v-if="!$v.username.minLength">Username should be more than 3 symbols!</div>
            </template>
            </div>
            <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-4">
                <input id="password" type="password" name="password" v-model="password" @blur="$v.password.$touch" class="form-control"/>
            </div>
            <div class="col-sm-6"></div>
            <template v-if="$v.password.$error">
                <div v-if="!$v.password.required">Password is required!</div>
                <div v-if="!$v.password.minLength">Password should be more than 8 symboils!</div>
            </template>
            </div>
            <button type="submit" class="btn btn-primary" v-on:click="submitHandler">submit</button>
        </form>  
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
const axios = require('axios').default;
const auth = require('../mixins/auth.js').default;

export default {
mixins: [validationMixin],
  data() {
    return {
      username: '',
      password: ''
    };
  },
  validations:{
      username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    submitHandler() {
       const { username, password } = this;
     this.$v.$touch();
      if (this.$v.$invalid) { return; }
      axios.post('http://localhost:8083/api/users',{username, password}).then(res=>{
        if(res.status!==200&&res.status!==201){
          console.error("errrrrr");
          return;
        }
         auth.setUser(res.data);
        this.$router.push('/about');
      })
      console.log('Form was submitted!');
    }
  }
}
</script>
<style scoped>
label{
    text-align:left;
    padding-left:5%;
}
</style>