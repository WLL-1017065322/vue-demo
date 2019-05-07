<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgSrc" alt>
          </div>

          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      imgLists: [
        {
          id: "1",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "2",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "3",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "4",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },

        {
          id: "5",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "6",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "7",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "8",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        },
        {
          id: "9",
          desc: "景点门票",
          imgSrc:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.imgLists.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/varibles.scss";
.icons >>> .swiper-container {
  //   overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  //   background: green;
}

.icon {
  float: left;
  width: 25%;
  overflow: hidden;
  padding-bottom: 25%;
  // background: red;
  position: relative;
  // aaa
  height: 0;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    //   background-color: blue;

    box-sizing: border-box;
    //   background: blue;
    padding: 0.1rem;
    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .icon-desc {
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $darkTextColor;
    text-align: center;

    //文字多省略
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
