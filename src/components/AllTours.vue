<!-- eslint-disable global-require -->
<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>

  <main class="main">

     <div class="card-container" v-if="tours.length">
        <div class="card" v-for="tour in tours" :key="tour._id">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                :src="`/images/tours/${tour.imageCover}`"
                :alt="tour.name"
                class="card__picture-img"

              />
              <!-- <img class="card__picture-img" src="/images/tours/tour-1-cover.jpg" alt="The Forest Hiker"> -->

            </div>

            <h3 class="heading-tertirary">
              <span>{{tour.name}}</span>
            </h3>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">{{tour.difficulty}} {{tour.duration}}-day tour</h4>
            <p class="card__text">
              {{tour.summary}}
            </p>
            <div class="card__data">
              <svg class="card__icon">
                <use xlink:href="images/icons.svg#icon-map-pin"></use>
              </svg>
              <span>{{tour.startLocation.description}}</span>
            </div>
            <div class="card__data">
              <svg class="card__icon">
                <use xlink:href="images/icons.svg#icon-calendar"></use>
              </svg>
              <span>{{tour.startDates[0].toLocaleString('us', {month: 'long', year: 'numeric'})}}</span>
            </div>
            <div class="card__data">
              <svg class="card__icon">
                <use xlink:href="images/icons.svg#icon-flag"></use>
              </svg>
              <span>{{tour.locations.length}} stops</span>
            </div>
            <div class="card__data">
              <svg class="card__icon">
                <use xlink:href="images/icons.svg#icon-user"></use>
              </svg>
              <span>{{tour.maxGroupSize}} people</span>
            </div>
          </div>

          <div class="card__footer">
            <p>
              <span class="card__footer-value">{{tour.price}}</span>

              <span class="card__footer-text"> per person</span>
            </p>
            <p class="card__ratings">
              <span class="card__footer-value"> {{tour.ratingsAverage}}</span>
              <span class="card__footer-text"> rating ({{tour.ratingsQuantity}})</span>
            </p>
            <!-- <a href="#" class="btn btn--green btn--small">Details</a> -->
            <router-link :to="{ name: 'tourdetails', params: { id: tour._id } }" class="btn btn--green btn--small">Details</router-link>
          </div>
        </div>

      </div>

  </main>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AllTours',

  data() {
    return {
      tours: [],
    };
  },

  async created() {
    try {
      const res = await axios.get('tours');
      console.log(res.data.data.data);
      const { data } = res.data.data;
      this.tours = data;
    } catch (err) {
      err.value = err.message;
    }
  },

};
</script>

<style>

@media screen and (max-width: 75em) {
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}

</style>
