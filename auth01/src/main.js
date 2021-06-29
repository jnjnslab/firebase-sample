import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import firebase from 'firebase'

// Your web app's Firebase configuration
//var firebaseConfig = {
//    apiKey: "AIzaSyCme2oXmYRG33ogl341vafKeXkjcNTO9Vo",
//    authDomain: "func01-c78a8.firebaseapp.com",
//    projectId: "func01-c78a8",
//    storageBucket: "func01-c78a8.appspot.com",
//    messagingSenderId: "2415518541",
//    appId: "1:2415518541:web:93bb2b67588ce14a718d04"
//};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
