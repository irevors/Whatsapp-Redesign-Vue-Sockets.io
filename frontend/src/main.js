import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faMoon,
  faEllipsisH,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch, faMoon, faEllipsisH, faSun);

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
