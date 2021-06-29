<template>
<div>
  <form>
    <input type="file" ref="upfile" />
    <input type="button" value="アップロード" v-on:click="onclick" />
  </form>
  <div>{{ result }}</div>
</div>
</template>

<script>
    import { fire } from '../firebaseDb';

    export default {
        data() {
            return {
                result: ''
            }
        },
        methods: {
            onclick() {
                var upfile = this.$refs.upfile.files[0];
                var ref = fire.storage().ref().child('images/' + upfile.name);
                ref.put(upfile).then(function(snapshot) {
                    console.log(snapshot);
                    alert('アップロードしました');
                });
            }
        }
    }
</script>