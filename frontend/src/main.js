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
  faEllipsisV,
  faSun,
  faArchive,
  faPlus,
  faUserFriends,
  faCommentDots,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// add to fa's library selected icons
library.add(
  faSearch,
  faMoon,
  faEllipsisH,
  faSun,
  faArchive,
  faPlus,
  faEllipsisV,
  faUserFriends,
  faCommentDots,
  faHistory
);

// bootstrap
// import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Overlayscrollbars
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

// custom components
import Avatar from '@/components/Common/Avatar.vue';
import BaseModal from '@/components/Common/BaseModal.vue';

const app = createApp(App);

app.use(store);
app.use(router);
// register globally overlay scrollbars
app.use(PerfectScrollbar, { maxScrollbarLength: 90, minScrollbarLength: 90 });
// register globally font awesome component
app.component('font-awesome-icon', FontAwesomeIcon);
// register globally swiper components
app.component('swiper', Swiper);
app.component('swiper-slide', SwiperSlide);

// register globally custom components
app.component('Avatar', Avatar);
app.component('base-modal', BaseModal);

app.mount('#app');
