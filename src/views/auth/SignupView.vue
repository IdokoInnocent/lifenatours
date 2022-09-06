<template>
  <main class="main">
    <div class="login-form">
      <h2 class="heading-secondary ma-bt-lg">Create Your Account</h2>
       <div class="alert alert--error" v-if="errMessage">{{errMessage}}</div>
       <div class="alert alert--error" v-if="sucMessage">{{sucMessage}}</div>
      <form class="form form--login" @submit.prevent="handleSubmit">
         <div class="form__group">
          <label class="form__label" for="name">Your Name</label>
          <input class="form__input" type="text" placeholder="Name" v-model="name" required />
        </div>
        <div class="form__group">
          <label class="form__label" for="email">Email address</label>
          <input class="form__input" type="email" placeholder="Email" v-model="email" required />
        </div>

        <div class="form__group">
          <label class="form__label" for="password">Password</label>
          <input
            class="form__input"
            type="password"
            placeholder="••••••••"
            v-model="password"
            required
          />
        </div>
        <div class="form__group">
          <label class="form__label" for="password">Confirm password</label>
          <input class="form__input" type="password" placeholder="Confirm password" v-model="confirmPassword" required />
        </div>
        <div class="form__group">
          <button class="btn btn--green" v-if="pending" disabled>{{pending}}</button>
          <button class="btn btn--green" v-else>Sign up</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignupView',

  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

      errMessage: '',
      sucMessage: '',
      pending: '',
    };
  },

  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      try {
        this.pending = 'Creating....';
        await axios.post('users/signup', data);
        this.$router.push({ name: 'login' });
      } catch (err) {
        this.errMessage = 'Unable to create account';
      }
      this.pending = '';
    },
  },
};
</script>

<style scoped>
h2 {
margin-bottom: 2rem;
}

</style>
