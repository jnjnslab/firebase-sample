<template>
<h1>削除</h1>
<input type="text" id="name" v-model="name" />
<button v-on:click="onclick">画像削除</button>
<p>{{ message }}</p>
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
                ref.delete().then(function() {
                    alert('削除しました');
                }).catch(function(error) {
                    console.log(error);
                    alert('失敗しました');
                });

            }
        }
    }
</script>