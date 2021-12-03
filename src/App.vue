<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    
  </div>
</template>
<script>
import MainTabBar from "components/content/MainTabBar.vue"
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
@import "assets/css/base.css";
@import "assets/css/normalize.css";

</style>
