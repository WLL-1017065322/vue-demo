<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HomeHeader from '@/components/Header.vue';
import HomeSwiper from '@/components/Swiper.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  },
};
</script>
