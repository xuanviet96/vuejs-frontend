<template>
  <div>
    <h4>User Edit</h4>
    <form id="edit-form" v-on:submit.prevent="submitForm">
      <span>First Name:</span>
      <input v-model="user.firstName" placeholder="edit me" />
      <br /><br />
      <span>Last Name:</span>
      <input v-model="user.lastName" placeholder="edit me" />
      <br /><br />
      <span>Email: </span>
      <input v-model="user.email" placeholder="edit me" />
      <br /><br />
      <button class="submit-button" type="submit">Submit</button>
      <button class="cancel-button" @click="cancel()">Cancel</button>
    </form>
  </div>
</template>
<script>
import UserService from "../services/UserService";
export default {
  data() {
    return {
      user: [],
    };
  },
  methods: {
    getOne(userId) {
      UserService.getOne(userId).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
    submitForm() {
      var data = {
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
      };
      UserService.update(this.user.id, data).then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.$router.push("/");
      });
    },
    cancel() {
      this.$router.push("/");
    },
  },
  created() {
    let userId = this.$route.params.id;
    this.getOne(userId);
  },
};
</script>
<style scoped>
.submit-button {
  margin-right: 100px;
}
</style>