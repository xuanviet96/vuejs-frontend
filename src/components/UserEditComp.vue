<template>
    <div>
        <h4>User Edit</h4>
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
            <button class = "submit-button" type="submit">Submit</button>            
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
        getOne(userId){
            UserService.getOne(userId).then((response) => {
                console.log(response.data)
                this.users = response.data;
            });
        },
        submitForm(){
            var data = {
            id: this.users.id,
            firstName: this.users.firstName ,
            lastName: this.users.lastName,
            email: this.users.email
        };
            UserService.update(this.users.id, data).then((response) => {
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
        let userId = this.$route.params.id
        this.getOne(userId);
    }
}
</script>
<style scoped>
    .submit-button{
        margin-right: 100px;
    }
</style>