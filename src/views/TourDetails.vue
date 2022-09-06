<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/iframe-has-title -->
<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>

    <section class="section-header" v-if="tour">
      <div class="header__hero">
        <div class="header__hero-overlay">&nbsp;</div>
        <img :src="`/images/tours/${tour.imageCover}`" alt="" class="header__hero-img">
      </div>
      <div class="heading-box">
        <h1 class="heading-primary">
          <span
            >{{tour.name}}<br /></span
          >
        </h1>
        <div class="heading-box__group">
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="/images/icons.svg#icon-clock"></use>
              <!-- <use xlink:href="images/icons.svg#icon-map-pin"></use> -->
            </svg>
            <span class="heading-box__text">{{tour.duration}} Days</span>
          </div>
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="/images/icons.svg#icon-map-pin"></use>
            </svg>
            <span class="heading-box__text">{{tour.startLocation.description}}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-description">
      <div class="overview-box">
        <div>
          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/images/icons.svg#icon-calendar"></use>
              </svg>
              <span class="overview-box__label">Next date</span>
              <span class="overview-box__text">{{tour.startDates[0].toLocaleString('us', {month: 'long', year: 'numeric'})}}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/images/icons.svg#icon-trending-up"></use>
              </svg>
              <span class="overview-box__label">Difficulty</span>
              <span class="overview-box__text">{{tour.difficulty}}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/images/icons.svg#icon-user"></use>
              </svg>
              <span class="overview-box__label">Participants</span>
              <span class="overview-box__text">{{tour.maxGroupSize}} people</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/images/icons.svg#icon-star"></use>
              </svg>
              <span class="overview-box__label">Rating</span>
              <span class="overview-box__text">{{tour.ratingsAverage}} / 5</span>
            </div>
          </div>

          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>

            <div class="overview-box__detail" v-for="guide in tour.guides" :key="guide._id">
              <img
                :src="`/images/users/${guide.photo}`"
                alt="Lead gui"
                class="overview-box__img"
              />
              <span class="overview-box__label" v-if="guide.role === 'lead-guide'">{{guide.role}}</span>
              <span class="overview-box__label"  v-if="guide.role === 'guide'">Tour-guides</span>
              <span class="overview-box__text">{{guide.name}}</span>
            </div>

          </div>
        </div>
      </div>

      <div class="description-box">
        <h2 class="heading-secondary ma-bt-lg">About {{tour.name}}</h2>
        <p class="description__text">
          <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. -->
          {{tour.description}}
        </p>
        <p class="description__text">
          <!-- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum! -->
          <!-- {{tour.description}} -->
        </p>
      </div>
    </section>

    <section class="section-pictures">
      <div class="picture-box" v-for="(image, index) in tour.images" :key="image.name">
        <img
          :class="`picture-box__img--${index + 1}`"
          class="picture-box__img"
          :src="`/images/tours/${image}`"
          :alt="`The Park Camper Tour ${index + 1}`"
        />
      </div>
    </section>

    <section class="section-map">
      <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><a href="https://www.embedgooglemap.net">google maps on website</a></div></div>
    </section>

    <section class="section-reviews">
      <div class="reviews">
        <div class="reviews__card" v-for="review in tour.reviews" :key="review._id">
          <div class="reviews__avatar" v-if="review.user">
            <img
              :src="`/images/users/${review.user.photo}`"
              :alt="review.user.name"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">{{review.user.name}}</h6>
          </div>
          <!-- <div class="reviews__avatar" v-else>
            <img
              :src="`/images/users/default.jpg`"
              :alt="review"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">{{review}}</h6>
          </div> -->
          <p class="reviews__text">
            {{review.review}}
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/images/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/images/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/images/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/images/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/images/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>

    </section>

    <section class="section-cta">
      <div class="cta">
        <div class="cta__img cta__img--logo">
          <img src="/images/logo-white.png" alt="Natours logo"/>
        </div>
        <img :src="`/images/tours/${tour.images[1]}`" alt="" class="cta__img cta__img--1" />
        <img :src="`/images/tours/${tour.images[2]}`" alt="" class="cta__img cta__img--2" />

        <div class="cta__content">
          <h2 class="heading-secondary">What are you waiting for?</h2>
          <p class="cta__text">
            {{tour.duration}} days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button class="btn btn--green span-all-rows" v-if="authenticated" @click="submit(tour._id)">Book tour now!</button>
          <!-- <router-link :to="{name: 'booktour'}" class="btn btn--green span-all-rows" v-if="authenticated">Book tour now!</router-link> -->
          <router-link :to="{name: 'login'}" v-if="!authenticated" class="btn btn--green span-all-rows">LOG IN TO BOOK TOUR NOW</router-link>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios';
import auth from '@/store/auth';
import { mapGetters } from 'vuex';

export default {
  name: 'TourDetails',

  beforeRouteEnter(to, from, next) {
    if (auth.state.token) {
      next();
    } else {
      next({ name: 'login' });
    }
  },

  data() {
    return {
      tour: {},
    };
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },

  async created() {
    try {
      const res = await axios.get(`tours/${this.$route.params.id}`);

      const { data } = res.data.data;
      this.tour = data;
      console.log(this.tour);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
</style>
