<template>
  <div>
    <home-header>header</home-header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HomeHeader from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
  },
};
</script>
