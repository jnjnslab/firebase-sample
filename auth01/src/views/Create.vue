<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model.number="user.age" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Person</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { fire } from '../firebaseDb';
    const db = fire.firestore();

    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.age = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>