<template>
  <div>
    <h4>User Register</h4>
    <form id="register-form" v-on:submit.prevent="submitForm">
      <span>First Name:</span>
      <input
        type="text"
        v-model="user.firstName"
        v-bind:class="{ 'is-valid': errors.firstName }"
        placeholder="edit me"
      />
      <div class="invalid-feedback d-block">{{ errors.firstName }}</div>
      <br /><br />
      <span>Last Name:</span>
      <input
        type="text"
        v-model="user.lastName"
        v-bind:class="{ 'is-valid': errors.firstName }"
        placeholder="edit me"
      />
      <div class="invalid-feedback d-block">{{ errors.lastName }}</div>
      <br /><br />
      <span>Email: </span>
      <input
        type="text"
        v-model="user.email"
        v-bind:class="{ 'is-valid': errors.email }"
        placeholder="edit me"
      />
      <div class="invalid-feedback d-block" v-if="errors.email">
        {{ errors.email }}
      </div>
      <br /><br />
      <button class="submit-button" type="submit">Save</button>
      <button class="cancel-button" @click="cancel()">Cancel</button>
    </form>
  </div>
</template>
<script>
// import { isVNode } from '@vue/runtime-core/dist/runtime-core';
import UserService from "../services/UserService";
export default {
  data() {
    return {
      errors: {
        firstName: "",
        lastName: "",
        email: "",
      },
      user: {},
      // users : []
    };
  },
  methods: {
    submitForm() {
      if (this.validate()) {
        const data = {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
        };
        UserService.save(data)
          .then((response) => {
            console.log(" Response data", response.data);
            this.$router.push("/");
            // this.users = response.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // submitForm() {
    //     this.validate()
    //     console.log(this.validate())
    //     console.log(this.errors)
    //     console.log(this.user)
    // },
    cancel() {
      this.$router.push("/");
    },
    validate() {
      let isValid = true;

      if (!this.user.firstName) {
        this.errors.firstName = " First Name is required";
        isValid = false;
      } else {
        this.errors.firstName = "";
      }
      if (!this.user.lastName) {
        this.errors.lastName = " Last Name is required";
        isValid = false;
      } else {
        this.errors.lastName = "";
      }
      if (!this.user.email) {
        this.errors.email = " Email is required";
        isValid = false;
      } else if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email) ==
        false
      ) {
        this.errors.email = "Invalid email format";
        isValid = false;
      } else {
        this.errors.email = "";
      }
      return isValid;
    },
  },
  created() {
    // setInterval(() => {
    //   console.log(this.user);
    // }, 2000);
  },
};
</script>
<style scoped>
.submit-button {
  margin-right: 100px;
}
</style>