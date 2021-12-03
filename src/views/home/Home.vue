<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <home-feature/>
    <h1>q</h1>
    <h1>q</h1>
    <h1>q</h1>
    <h1>q</h1>
    <h1>q</h1>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView'
import HomeFeature from "./childComps/HomeFeature.vue";

import { getHomeMultiData } from "network/home.js"

export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.slice(1,5)
      this.recommends = res.slice(1,5)
      console.log(999,res)
    })
  }
}
</script>
<style lang="less" scoped>
#home {
    padding-top: 44px;
    // height: 100vh;
    // position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
