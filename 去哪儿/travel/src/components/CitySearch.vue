<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或者拼音" class="search-input">
    </div>
    <div class="search-content">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/varibles.scss";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgcolor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
 
}

 .search-content {
    // height: 1rem;  
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      background: #fff;
      color: #666;
    }
  }
</style>