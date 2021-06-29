<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp">Register</button>
    <p>Do you have an account? 
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import { fire } from '../firebaseDb';

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      fire.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then((userCredential) => {
        console.log(userCredential);
        //var user = userCredential.user;
        alert('Create account: ')
      })
      .catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>