<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <main class="main">
    <div class="alert alert--error" v-if="errMessage">{{errMessage}}</div>
    <div class="table-responsive">
      <table>
        <tr>
            <th>
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-map"></use>
                </svg>
                Users
            </th>
            <th>
                <svg class="reviews__star reviews__star--active">
                    <use xlink:href="/images/icons.svg#icon-map-pin"></use>
                </svg>
                Photo
            </th>
                 <th>
                <svg class="reviews__star reviews__star--active">
                    <use xlink:href="/images/icons.svg#icon-map-pin"></use>
                </svg>
                User Role
            </th>
            <th>
                <svg class="reviews__star reviews__star--active">
                    <use xlink:href="/images/icons.svg#icon-trash"></use>
                </svg>
                Actions
            </th>
        </tr>
        <tr v-for="user in users" :key="user._id">
            <td>
                <p>{{user.name}}</p>
            </td>
            <td><img :src="`/images/users/${user.photo}`"  class="nav__user-img" alt={{user.name}}></td>
            <td>

                 {{user.role}}
            </td>

             <td>
                <button class="btn btn--small btn--green btn--save-password"  @click.prevent="handleDelete(user._id)">Delete</button>
            </td>
        </tr>

      </table>
    </div>
<br>
  </main>
</template>

<script>
import axios from 'axios';
import auth from '@/store/auth';
import { mapGetters } from 'vuex';

export default {
  name: 'ManageTours',

  beforeRouteEnter(to, from, next) {
    if (auth.state.token) {
      next();
    } else {
      next({ name: 'login' });
    }
  },

  data() {
    return {
      users: [],
      errMessage: '',
      maxPerPage: 5,
    };
  },

  async created() {
    try {
      const res = await axios.get('users');
      console.log(res.data.data.data);
      const { data } = res.data.data;
      this.users = data;
    } catch (err) {
      err.value = err.message;
    }
    // this.getUsers();
    // window.addEventListener('scroll', this.handleScroll);
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },

  //   beforeUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll);
  //   },

  methods: {

    // handleScroll() {
    //   const { scrollTop, offsetHeight } = document.documentElement;
    //   const { innerHeight } = window;
    //   const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

    //   if (bottomOfWindow) {
    //     this.getUsers();
    //   }
    // },

    // async getUsers() {
    //   try {
    //     const lastDocument = await axios.get('');
    //     const res = await axios.get('users').limit(this.maxPerPage);
    //     console.log(res.data.data.data);
    //     const { data } = res.data.data;
    //     this.users = data;
    //   } catch (err) {
    //     err.value = err.message;
    //   }
    // },

    async handleDelete(id) {
      try {
        await axios.delete(`users/${id}`);
        this.$router.push({ name: 'login' });
      } catch (err) {
        this.errMessage = 'Could not delete user! please, try again';
      }
    },
  },

};
</script>

<style>

table {
  width:100%;
  font-size: 2rem;

}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
table#t01 tr:nth-child(even) {
  background-color: #eee;
}
table#t01 tr:nth-child(odd) {
 background-color: #fff;
}
table#t01 th {
  background-color: black;
  color: white;
}

.table-links {
    text-decoration: none;
    text-transform: capitalize;
    color:   #444;
    font-size: 2rem;
}

th {
  background: #000;
  color: #fff;
}

@media only screen and (max-width: 31.5em) {
  table {
    width: 40%;
    font-size: 90%;
  }

  th, td {
    padding: 1rem
  }
}

</style>
