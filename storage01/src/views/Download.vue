<template>
<h1>Download</h1>
<input type="text" id="name" v-model="name" />
<button v-on:click="onclick">画像取得</button>
<p>{{ message }}</p>
<p><img alt="画像なし" src="" id="myimg"></P>
</template>

<script>
    import { fire } from '../firebaseDb';

    export default {
        data() {
            return {
                name: '',
                message: ''
            }
        },
        methods: {
            onclick() {
                var ref = fire.storage().ref().child('images/' + this.name);
                ref.getDownloadURL().then(function(url) {
                    console.log(url);
                    // Or inserted into an <img> element:
                    var img = document.getElementById('myimg');
                    img.src = url;
                }).catch(function(error) {
                    // Handle any errors
                    console.log(error);
                });

            }
        }
    }
</script>