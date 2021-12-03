<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shouye.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shouye_hover.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/fenlei.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/fenlei_hover.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/baoshuicang.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/baoshuicang_hover.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="red">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar//wo.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/wo_hover.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
    
</template>
<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      
    }
  }
}
</script>
<style lang="less">

</style>
