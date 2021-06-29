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
                    <input type="text" class="form-control" v-model="user.age" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        mounted(){
 
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                axios.post('https://xxxx.cloudfunctions.net/v1/add', this.user)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>