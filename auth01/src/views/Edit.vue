<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model.number="user.age" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Edit User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { fire } from '../firebaseDb';
    const db = fire.firestore();

    export default {
        props:['id'],
        data() {
            return {
                user: {
                }
            }
        },
        created() {
            let dbRef = db.collection('users').doc(this.id);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    console.log("User successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>