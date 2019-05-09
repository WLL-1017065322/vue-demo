<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            内容
        </div>
        <router-link to='/city'>
        <div class="header-right">
            <!-- {{this.$store.state.city}} -->
            {{this.city}}
            <!-- {{this.doubleCity}} -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),

    ...mapGetters(['doubleCity']),
  },
//   props: {
//     city: String,
//   },
};
</script>
<style scoped lang="scss">
@import '../assets/styles/varibles.scss';
.header{
    display: flex;
    height: .86rem;
    background-color: $bgcolor;
    color: #fff;
    .header-left {
        width: .64rem;
        float: left;

        height: .86rem;
        line-height: .86rem;
        .back-icon {
            text-align: center;
            font-size: .4rem;
        }

    }
    .header-input {
        flex:1;
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        background-color: #fff;
        border-radius: .1rem;
        color: #ccc;
    }
    .header-right {
        // width: 1.24rem;

        min-width: 1.04rem;
        padding: 0 .1rem;
        float: right;
        text-align: center;
        color: #fff;


         height: .86rem;
        line-height: .86rem;
        .arrow-icon {
            font-size: .24rem;
            margin-left: -.04rem;
            color:#fff;
        }

    }
}

</style>
