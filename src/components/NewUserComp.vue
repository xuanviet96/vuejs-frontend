<template>
    <div>
        <h4>User Register</h4>
        <form id="todo-field" v-on:submit.prevent="submitForm" >
            <span>First Name:</span>
            <input v-model="users.firstName" placeholder="edit me" />
            <br><br>
            <span>Last Name:</span>
            <input v-model="users.lastName" placeholder="edit me" />
            <br><br>
            <span>Email: </span>
            <input v-model="users.email" placeholder="edit me" />
            <br><br>
            <button class = "submit-button" type="submit">Save</button>            
            <button class = "cancel-button" @click="cancel()">Cancel</button>
        </form>
    </div>

</template>
<script>
import UserService from '../services/UserService';
export default {
    data(){
        return {
            users : [] 
        }
    },
    methods: {
        submitForm(){
            var data = {
            firstName: this.users.firstName ,
            lastName: this.users.lastName,
            email: this.users.email
        };
            UserService.save(data).then((response) => {
                console.log(response.data)
                this.users = response.data;
                this.$router.push("/");
            });
        },
        cancel(){
            this.$router.push("/");
        },

    },
    created() {
    }
    
}
</script>
<style scoped>
    .submit-button{
        margin-right: 100px;
    }
</style>