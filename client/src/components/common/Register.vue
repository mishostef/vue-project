<template>
    <div>
        <form @submit.prevent="submitHandler">
            <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-4">
                <input id="username" v-model="username" @blur="$v.username.$touch" class="form-control" />
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
                <input id="password" type="password" v-model="password" @blur="$v.password.$touch" class="form-control"/>
            </div>
            <div class="col-sm-6"></div>
            <template v-if="$v.password.$error">
                <div v-if="!$v.password.required">Password is required!</div>
                <div v-if="!$v.password.minLength">Password should be more than 8 symboils!</div>
            </template>
            </div>
            <div class="form-group row">
            <label for="cPassword" class="col-sm-2 col-form-label">Confirm Password</label>
            <div class="col-sm-4">
                <input id="cPassword" type="password" v-model="cPassword" @blur="$v.cPassword.$touch" class="form-control"/>
            </div>
            <div class="col-sm-6"></div>
            <template v-if="$v.cPassword.$error">
                <div v-if="!$v.cPassword.sameAs">Passwords don't match!</div>
            </template>
            </div>
        </form>  
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

function sameAs(field) {
  return function (value) {
    return this[field] === value;
  }
}

export default {
mixins: [validationMixin],
  data() {
    return {
      username: '',
      password: '',
      cPassword: ''
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
    },
    cPassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) { return; }
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