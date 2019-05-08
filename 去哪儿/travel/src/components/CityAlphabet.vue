<template>
  <ul class="list">
    <li class="item">a</li>
    <li class="item">b</li>
    <li class="item">c</li>
    <li class="item">d</li>
    <li class="item">e</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet"
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