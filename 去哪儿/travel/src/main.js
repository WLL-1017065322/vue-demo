import fastClick from 'fastclick';
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import store from './store';

import 'swiper/dist/css/swiper.css';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont/iconfont.css';


Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
