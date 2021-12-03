<template>
  <swiper>
    <template v-slot:swiperItem>
      <swiper-item v-for="item in banners" :key="item">
        <template v-slot:imgItem >
            <img :src="item.firstpicture" alt="" class="swiperImg">
        </template>
      </swiper-item>
    </template>
  </swiper>  
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.swiperImg {
  display: block;
  width: 100%;
  height: 200px;
}
</style>
