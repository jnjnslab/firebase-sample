<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Key</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.key">
                        <td>{{ user.name }}</td>
                        <td>{{ user.age }}</td>
                        <td>{{ user.key }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    
    export default {
        data() {
            return {
                users: []
            }
        },
        mounted(){
            axios.get('https://xxxx.cloudfunctions.net/v1/list')
            .then(response => this.users = response.data.users)
            .catch(error => console.log(error))
        },
        methods: {
        }
    }
</script>