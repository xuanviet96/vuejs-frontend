<template>
    <div class = "container">
        <a href="/users/register">Register</a>
        <h1 class = "text-center"> Users List </h1>
        <table class = "table table-striped">
            <thead>
                <th> User Id </th>
                <th> User First Name </th>
                <th> User Last Name </th>
                <th> User Email </th>
                <th> Action</th>

            </thead>
            <tbody>
                <tr v-for= "user in users" v-bind:key = "user.id">
                    <td> {{user.id}} </td>
                    <td> {{user.firstName}} </td>
                    <td> {{user.lastName}} </td>
                    <td> {{user.email}} </td>
                    <td>
                        <button @click="editUser(user.id)">Edit</button>
                        <button @click="removeUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
import UserService from '../services/UserService';
export default {
    name: "userCom",
    data(){
        return {
            users : [] 
        }
    },
    methods: {
        getUsers(){
            UserService.getUsers().then((response) => {
                this.users = response.data;
            });
        },
        removeUser(id) {
            console.log(id)
            UserService.removeUser(id).then(() => {
                this.getUsers();
            });

        },
        editUser(id) {
            console.log(id)
            this.$router.push("users/" + id)
        },


    },
    created() {
        // this.getUsers();
        let userId = this.$route.params.id
        this.getUsers(userId);
    }
}
</script>

