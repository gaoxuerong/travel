<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-item" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
     </swiper>
  </div>
</template>
<script>
import Vue from "vue"
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      
    };
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] =[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-slide 
    height: 0;
    padding-bottom: 50%;  
    display: flex;
    flex-flow: row wrap;
  .icons
    margin-top .1rem
    .icon {
      text-align center
      position: relative
      width: 25%
      padding-bottom: 25%
      .icon-img {
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0.44rem
        padding: 0.1rem

        .icon-img-item {
          height: 100%
        }
      }
      .icon-desc {
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
      }
  }
</style>


