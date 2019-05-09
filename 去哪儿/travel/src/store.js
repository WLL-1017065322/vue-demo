import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '上海';


try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: localStorage.city || '上海',
  },

  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {}
    },
  },
  actions: {
    changeCity(ctx, city) {
      // console.log(city)
      ctx.commit('changeCity', city);
    },
  },
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
});
