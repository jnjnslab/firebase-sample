<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.key">
                        <td>{{ user.name }}</td>
                        <td>{{ user.age }}</td>
                        <td>
                            <router-link v-bind:to="{name:'Edit',params:{id: user.key}}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { fire } from '../firebaseDb';
    const db = fire.firestore();
    
    export default {
        data() {
            return {
                users: []
            }
        },
        created() {
            db.collection('users').onSnapshot((snapshotChange) => {
                this.users = [];
                snapshotChange.forEach((doc) => {
                    this.users.push({
                        key: doc.id,
                        name: doc.data().name,
                        age: doc.data().age
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>