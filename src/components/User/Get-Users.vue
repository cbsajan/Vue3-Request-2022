<template>
    <div class="row">

        <div class="col-auto mb-4" v-for="(user, index) in users" :key="index">
            <div class="card" style="width: 14rem;">
                <img class="card-img-top" :src="'https://placebeard.it/300/300?' + user.id" alt="Card image cap">
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong> {{ user.lastname }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        loadUsers() {
            axios.get('http://localhost:3004/users').then(response => {

                this.users = response.data
                console.log(this.users)
            }).catch(error => {
                console.log(error)
            })

        }
    },
    mounted() {
        console.log("Loading Data")
        this.loadUsers()
    }
}
</script>