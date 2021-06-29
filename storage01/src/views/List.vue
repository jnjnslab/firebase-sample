<template>
<h1>一覧</h1>
<button v-on:click="onclick">リスト</button>
<p>{{ message }}</p>
</template>

<script>
    import { fire } from '../firebaseDb';

    export default {
        data() {
            return {
                message: ''
            }
        },
        methods: {
            onclick() {
                var ref = fire.storage().ref().child('images');
                // Find all the prefixes and items.
                ref.listAll().then(function(res) {
                    res.prefixes.forEach(function(folderRef) {
                        // All the prefixes under listRef.
                        // You may call listAll() recursively on them.
                        console.log(folderRef);
                    });
                    res.items.forEach(function(itemRef) {
                        // All the items under listRef.
                        console.log(itemRef);
                        console.log(itemRef.name);
                    });
                }).catch(function(error) {
                    // Uh-oh, an error occurred!
                    console.log(error);
                });

            }
        }
    }
</script>