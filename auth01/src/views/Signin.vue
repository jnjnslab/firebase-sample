<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <button @click="signOut">Signout</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import { fire } from '../firebaseDb';

export default {
  name: 'Signin',
  data: function () {
    return {
      username: 'user1@example.com',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      fire.auth().signInWithEmailAndPassword(this.username, this.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        var user = userCredential.user;
        console.log(user.email);
        alert('Success: ')
      })
      .catch((error) => {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });

    },
    signOut: function () {
      fire.auth().signOut()
      .then(() => {
        alert('SignOut');
      })
    }
  }
}
</script>