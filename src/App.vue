<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!-- <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_selected.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/search.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/search_selected.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/intro.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/intro_selected.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/mine.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/mine_selected.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar> -->
    
  </div>
</template>
<script>
// import TabBar from "components/tabbar/TabBar.vue"
// import TabBarItem from "components/tabbar/TabBarItem.vue"
import MainTabBar from "components/MainTabBar.vue"
export default {
  name:'App',
  components: {
    // TabBar,
    // TabBarItem
    MainTabBar
  },
  data() {
    return {
      
    }
  }
}
</script>
<style lang="less">
@import "./assets/css/base.css";

</style>
