<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "1",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "2",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "3",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "4",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   }
      // ]
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper{
  overflow:hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img{
    width: 100%;
  }
}
// background-color: red;

.item-info {

  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;


    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;


    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

}
</style>
