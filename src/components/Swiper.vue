<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
       <img  class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://pic.c-ctrip.com/htlpic/flagship/store/accor/bgindex.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/p/p60/1809/f4/d19e9608d2d1a002.jpg_256x160_539f2e86.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active { // 穿透，使之不受scoped的限制
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>


