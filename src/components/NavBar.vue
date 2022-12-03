<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <header class="header" :class="{'scroll-nav': scrollPosition}">
    <nav class="nav nav--tours">
      <router-link class="nav__el" :to="{ name: 'home' }">All Tours</router-link>
    </nav>
    <div class="header__logo">
      <img src="https://natour-api.onrender.com/img/logo-white.png" alt="NatourLogo" />
    </div>
    <nav class="nav nav--user" v-if="!mobile">
      <template v-if="authenticated">
        <router-link class="nav__el nav__el--logout" :to="{ name: 'home' }" @click.prevent="signOut"
          >Log out</router-link
        >
        <router-link class="nav__el" :to="{ name: 'userdetails' }">
          <img :src="`/images/users/${user.photo}`" alt="1" class="nav__user-img" />
          <span>{{ user.name.split(" ")[0].toUpperCase() }}</span>
        </router-link>
      </template>

      <div v-if="!authenticated">
        <router-link class="nav__el" :to="{ name: 'login' }">Log in</router-link>
        <router-link class="nav__el nav__el--cta" :to="{ name: 'signup' }">Sign up</router-link>
      </div>
    </nav>
    <div class="icon">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <span @click="toggleMobileNav" v-if="mobile" class="material-icons" :class="{'icon-active': mobileNav}">menu</span>
    </div>
    <transition name="mobile-nav">
      <nav class="dropdown-nav" v-if="mobileNav">
        <template v-if="authenticated">
          <router-link class="nav__el nav__el--logout" :to="{ name: 'home' }" @click.prevent="signOut"
            >Log out</router-link
          >
          <router-link class="nav__el" :to="{ name: 'userdetails' }">
            <img :src="`/images/users/${user.photo}`" alt="1" class="nav__user-img" />
            <span>{{ user.name.split(" ")[0].toUpperCase() }}</span>
          </router-link>
        </template>

        <div v-if="!authenticated">
          <router-link class="nav__el" :to="{ name: 'login' }">Log in</router-link>
          <router-link class="nav__el nav__el--cta" :to="{ name: 'signup' }">Sign up</router-link>
        </div>
    </nav>
    </transition>
  </header>
</template>

<script>
// import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavBar',
  props: ['tours'],
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut',
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({ name: 'login' });
      });
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 600) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 3rem 4rem;
  height: 8rem;
  /* margin-bottom: 6rem; */
  background: #444;
  /* position: fixed; */
  transition: 0.5s ease all;
}

span {
  color: white;
  font-size: 16px;
  font-weight: 400;
}

.icon{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 2.4rem;
  height: 100%;
  font-size: 5rem;
  cursor: pointer;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  /* flex-direction: column; */
  position: fixed;
  width: 100%;
  max-width: 25rem;
  height: 100%;
  background-color: #000;
  top: 0;
  left: 0;
}

.dropdown-nav .nav__el{
  display: flex;
  margin-left: 2rem;
  margin-top: 4rem;
  flex-direction: column;
}

.mobile-nav-enter-active, .mobile-nav-leave-active {
  transition: 2s ease all
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-25rem)
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

</style>
