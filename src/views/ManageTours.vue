<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <main class="main">
    <div class="alert alert--error" v-if="errMessage">{{errMessage}}</div>

    <table>
        <tr>
            <th>
                <svg class="reviews__star reviews__star--active">
                  <use xlink:href="/images/icons.svg#icon-map"></use>
                </svg>
                Tours
            </th>

            <th>
                <svg class="reviews__star reviews__star--active">
                    <use xlink:href="/images/icons.svg#icon-trash"></use>
                </svg>
                Actions
            </th>
        </tr>
        <tr v-for="tour in tours" :key="tour._id">
            <td>
                <router-link :to="{name: 'tourdetails', params: {id: tour._id}}" class="table-links">{{tour.name}}</router-link>
            </td>

             <td>
                <button class="btn btn--small btn--green btn--save-password"  @click.prevent="handleDelete(tour._id)">Delete</button>
            </td>
        </tr>

    </table>
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
      tours: [],
      errMessage: '',
      tourModal: false,
    };
  },

  async created() {
    try {
      const res = await axios.get('tours');
      console.log(res.data.data.data);
      const allData = res.data.data.data;
      this.tours = allData;
      this.selectedImage = this.tours.imageCover;
    } catch (err) {
      err.value = err.message;
    }
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },

  methods: {
    async handleDelete(id) {
      try {
        await axios.delete(`tours/${id}`);
        this.$router.push({ name: 'home' });
      } catch (err) {
        this.errMessage = 'Could not update data! please, try again';
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
  text-align: center;
}
th, td {
  padding: 1rem;
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

</style>
