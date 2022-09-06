<!-- eslint-disable prefer-destructuring -->
<template>
  <main class="main">
    <div class="alert alert--error" v-if="errMessage">{{ errMessage }}</div>
    <div class="alert alert--success" v-if="sucMessage">{{ sucMessage }}</div>
    <div class="user-view">
      <nav class="user-view__menu">
        <ul class="side-nav">
          <li class="side-nav--active">
            <a href="#">
              <svg class="reviews__star reviews__star--active">
                <use xlink:href="/images/icons.svg#icon-settings"></use>
              </svg>
              settings
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="reviews__star reviews__star--active">
                <use xlink:href="/images/icons.svg#icon-briefcase"></use>
              </svg>
              My booking
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="reviews__star reviews__star--active">
                <use xlink:href="/images/icons.svg#icon-star"></use>
              </svg>
              My reviews
            </a>
          </li>
        </ul>

        <div class="admin-nav" v-if="user.role === 'admin'">
          <h5 class="admin-nav__heading">Admin</h5>
          <ul class="side-nav">
            <li>
              <router-link :to="{ name: 'managetours' }">
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-map"></use>
                </svg>
                Manage tours
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'manageusers' }">
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-users"></use>
                </svg>
                Manage users
              </router-link>
            </li>
            <li>
              <a href="#">
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-star"></use>
                </svg>
                Manage reviews
              </a>
            </li>
            <li>
              <a href="#">
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-briefcase"></use>
                </svg>
                Manage bookings
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="user-view__content">
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">YOUR ACCOUNT SETTINGS</h2>
          <form class="form form-user-data" @submit.prevent="updateUserData">
            <div class="form__group">
              <label for="name" class="form__label">Name</label>
              <input
                class="form__input"
                type="text"
                required="required"
                v-model="form.name"
                placeholder="Enter name"
              />
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="email">Email address</label
              ><input
                class="form__input"
                type="email"
                required="required"
                v-model="form.email"
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form__group form__photo-upload">
              <img
                class="form__user-photo"
                :src="`/images/users/${user.photo}`"
                :alt="user.photo"
              /><input
                @change="selectFile"
                class="form__upload"
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              /><label for="photo">choose new photo</label>
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green" v-if="!isPending">Save settings</button>
              <button class="btn btn--small btn--green" v-else disabled>Updating...</button>
            </div>
          </form>
        </div>
        <div class="line">&nbsp;</div>

        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">PASSWORD CHANGE</h2>
          <div v-if="update_password_show_alert" class="alert alert--success">
            {{ update_password_alert_message }}
          </div>
          <form class="form form-user-password" @submit.prevent="updateUserPassword">
            <div class="form__group">
              <label class="form__label" for="password-current">Current password</label>
              <input
                class="form__input"
                id="password-current"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
                v-model="passwordCurrent"
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="password">New password</label>
              <input
                class="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
                v-model="password"
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="password-confirm">Confirm password</label>
              <input
                class="form__input"
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
                v-model="confirmPassword"
              />
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green btn--save-password" ref="btnPassword">
                Save password
              </button>
              <!-- <button class="btn btn--small btn--green btn--save-password" v-if="isPending">Updating password</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserDetails',
  data() {
    return {
      form: {
        name: '',
        email: '',
        image: '',
      },

      passwordCurrent: '',
      password: '',
      confirmPassword: '',

      image: '',
      userData: [],
      isPending: false,
      errMessage: '',
      sucMessage: '',

      update_password_in_submission: false,
      update_password_show_alert: false,
      // login_alert_variant: 'bg-blue-500',
      update_password_alert_message: 'Please wait! We are updating data.',
    };
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },

  methods: {
    ...mapActions({
      updatePassword: 'auth/updatePassword',
    }),
    selectFile(e) {
      // eslint-disable-next-line prefer-destructuring
      const selected = e.target.files[0];
      this.image = selected;
    },

    async updateUserData() {
      try {
        this.isPending = true;
        const formData = new FormData();
        formData.append('image', this.image);
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);

        const res = await axios.patch('users/updateMe', formData);
        this.userData = res.data.data.user;
        console.log(this.userData);
        if (res.data.status === 'success') {
          this.sucMessage = 'Data Updated successfully!';
        }
      } catch (err) {
        this.errMessage = 'Could not update data! please, try again';
      }
      this.isPending = null;
      window.location.reload();
    },

    async updateUserPassword() {
      this.update_password_in_submission = true;
      this.update_password_show_alert = true;
      this.update_password_alert_message = 'please wait! updating.';
      try {
        this.$refs.btnPassword.textContent = 'Updating...';
        const data = {
          passwordCurrent: this.passwordCurrent,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        await this.updatePassword(data);
      } catch (err) {
        this.update_password_in_submission = false;
        this.update_password_alert_message = "Error! could not update user's password.";
        return;
      }
      this.$refs.btnPassword.textContent = 'Save password';
      this.update_password_alert_message = 'Password updated successfully!.';
      window.location.reload();
    },
  },

  async mounted() {
    const res = await axios.get('users/me');
    const { data } = res.data.data;
    this.form.name = data.name;
    this.form.email = data.email;
  },
};
</script>

<style>

@media screen and (max-width: 37.5em) {
  .user-view {
    flex-direction: column;
  }
}

@media screen and (max-width: 37.5em) {
  .user-view__form-container {
    width: 100%;
  }
}
</style>
