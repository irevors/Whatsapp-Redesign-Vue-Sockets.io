import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faMoon,
  faEllipsisH,
  faSun,
  faArchive,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// add to fa's library selected icons
library.add(faSearch, faMoon, faEllipsisH, faSun, faArchive);

// bootstrap
// import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';

const app = createApp(App);

app.use(store);
app.use(router);
// register globally font awesome component
app.component('font-awesome-icon', FontAwesomeIcon);
// register globally swiper components
app.component('swiper', Swiper);
app.component('swiper-slide', SwiperSlide);

app.mount('#app');
