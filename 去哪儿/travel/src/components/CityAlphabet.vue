<template>
  <ul class="list">
    <!-- <li
      class="item"
      v-for="(item,key) in cities"
      :key="key"
      @click="handleLetterClick"

      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>-->

    <li
      class="item"
      v-for="item in letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },

  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; //['a','b','c']
    },
    updated() {
      
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      // console.log(e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      // console.log(startY)
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            // this.startY = this.$refs["A"][0].offsetTop;
          const touchY = e.touches[0].clientY - 79;
          //   console.log(touchY)
          console.log(this.startY);
          const index = Math.floor((touchY - this.startY) / 20);
          //   console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },

    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/varibles.scss";
.list {
  display: flex;

  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgcolor;
  }
}
</style>