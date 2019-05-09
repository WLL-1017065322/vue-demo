<template>
  <div>
    <div class="title">热销推荐</div>

      <ul>
      <router-link :to="'/detail/' + item.id" tag="li" class="item" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>


  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array,
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "1",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "2",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "3",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
      //     title: "故宫",
      //     desc: "东方宫殿建筑代表，世界宫殿建筑典范"
      //   },
      //   {
      //     id: "4",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
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
  // margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  // background-color: red;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      text-align: left;


      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      text-align: left;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;

    }
  }
}


</style>
