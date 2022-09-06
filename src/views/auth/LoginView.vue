<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <main class="main">

    <div class="login-form">

      <h2 class="heading-secondary ma-bt-lg">Log Into Your Account</h2>
      <div class="alert alert--error" v-if="errMessage">{{errMessage}}</div>
      <div class="alert alert--success" v-if="sucMessage">{{sucMessage}}</div>
      <form class="form form--login" @submit.prevent="handleSubmit">
        <div class="form__group">
          <label class="form__label" for="email">Email address</label>
          <input class="form__input" type="email" placeholder="Email" v-model="form.email" required />
        </div>

        <div class="form__group">
          <label class="form__label" for="password">Password</label>
          <input
            class="form__input"
            type="password"
            placeholder="••••••••"
            v-model="form.password"
            required
          />
        </div>
        <div class="form__group">
          <!-- <button class="btn btn--green">Log in</button> -->
          <button class="btn btn--green" v-if="pending" disabled>{{pending}}</button>
          <button class="btn btn--green" v-else>Log in</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
// import axios from 'axios';
// import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errMessage: '',
      sucMessage: '',
      pending: '',
    };
  },

  // computed: {
  //   ...mapGetters({
  //     authenticated: 'auth/authenticated',
  //     user: 'auth/user',
  //   }),
  // },

  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    async handleSubmit() {
      this.pending = 'Loading....';
      await this.signIn(this.form).then(() => this.$router.replace({ name: 'home' })).catch(() => {
        this.errMessage = 'Invalid username or password';
      });
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
