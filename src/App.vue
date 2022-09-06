<!-- eslint-disable quotes -->
<template>

  <div class="content">

    <nav-bar></nav-bar>
    <router-view />
  </div>
  <footer-view></footer-view>

</template>

<script>
// import axios from 'axios';
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: { NavBar, FooterView },

  data() {
    return {

    };
  },

  methods: {
  },

};
</script>
<style scoped>
/* .content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
} */

.open {
  transform: translateX(300px);
}

#navigation-icon{
  cursor: pointer;

}
</style>
